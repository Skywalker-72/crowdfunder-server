const express = require('express');
const router = express.Router();
const { Payments, Projects } = require("../models")

router.post('/', async (req, res) => {
    const data = req.body;
    const paymentResponse = await Payments.create(data);
    
    //Update the amount in Projects table
    const project = await Projects.findByPk(data.projectId);
    if(project) {
        project.receivedAmount = project.receivedAmount + +paymentResponse.dataValues.amount
        await project.save();
        console.log(project.receivedAmount);
    } else {
        console.log('project Not Found')
    }
    res.json(data)
    
})

module.exports = router;
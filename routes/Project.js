const express = require('express');
const router = express.Router();
const { Projects } = require("../models")

// get All Projects
router.get('/', async  (req, res) => {
    const projectList = await Projects.findAll();
    res.send(projectList)
})

//get all projects by a particular Innovator
router.post('/byInnovatorId', async  (req, res) => {
    console.log(req.body)
    const projectList = await Projects.findAll({ where: {innovatorId: req.body.id}});
    res.send(projectList)
})

// create project
router.post('/create', async (req, res) => {
    const project = req.body;
    let imageUrls = "";
    project.imageUrls.forEach((url) => {
        imageUrls = imageUrls ? (imageUrls + "," + url.trim()) : url.trim();
    })
    project.imageUrls = imageUrls;
    await Projects.create(project);
    res.json(project);
})

// get details of specific project
router.post('/id', async (req, res) => {
    const projectId = req.body.id;
    console.log(projectId)
    const project = await Projects.findByPk(projectId);
    res.json(project);
})

module.exports = router;
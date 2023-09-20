const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())

const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(3001, () => { 
        console.log('Backend running at 3001') 
    });
}).catch((err) => {
    console.log(err)
})

//Routers
const projectRouter = require("./routes/Project");
const paymentRouter = require("./routes/Payment");
const InnovatorRouter = require("./routes/Innovator");
app.use("/projects", projectRouter);
app.use("/payments", paymentRouter);
app.use("/user", InnovatorRouter);
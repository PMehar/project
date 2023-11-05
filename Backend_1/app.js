const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

var cors = require('cors');

const app = express();

app.use(cors());

const blogRoutes = require('./routes/blog'); //this needs to be change

app.use(bodyParser.json({ extended: false})); //then this

app.use('/blog', blogRoutes); //then this

sequelize
.sync()
.then(result =>{
    // console.log(result);
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
});



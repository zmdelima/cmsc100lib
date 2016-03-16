'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require(__dirname+"/router");

app.use(bodyParser());
app.use(router(express.Router()));

app.listen(5001,function(){
    console.log("App listening at port 5001");
});

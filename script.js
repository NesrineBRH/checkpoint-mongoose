// dans le terminale taper "npm instal dotenv mongoose express --save"

const mongoose=require("mongoose")
var express = require("express");
onst person = require("./personPrototype")
var script = express();

//environment variables

require('dotenv').config();

//database connection

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open', () => {

console.log("Connected Database Successfully");

});

script.listen(3000,function(req,res){

console.log("Server is started on port 3000");

});

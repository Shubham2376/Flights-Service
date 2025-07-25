// As PORT is a key of object that returns so that is why we import it like this
const {serverConfig,Logger} = require('./config');
const express = require('express');

const apiRoutes = require('./routes'); //from index.js file inside the routes folder we are going to export the router object in that object all the api driven routes was mentioned

const app = express(); // As this is index.js we don't need to make express router you have access of app object 

// if incoming url starts with /api we going to bind it with apiRoutes router object 
app.use('/api',apiRoutes); //i am going to register /api

app.listen(serverConfig.PORT,()=>{
    console.log(`Successfully start the server on PORT : ${serverConfig.PORT}`)
    // here we pass info level we can pass level as warning,error
    // we have to pass message,label,timestamp
    Logger.info("Successfully started the server","root",{})
})


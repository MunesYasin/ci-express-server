'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT
const notFound = require('./hundler/404')
const not500 = require('./hundler/500')
const stamper = require('./middleWare/stamper')



app.get('/', (req,res)=>{
    res.send('All is good')
})

app.get('/data',stamper,(req,res)=>{
    const output = {
        10 :"even",
        5:"odd",
        "time" : req.timestamp
    };
    res.status(200).json(output)
})



app.get('/bad',(req,res,next)=>{
throw new Error('you made error')
})





app.use('*', notFound)
app.use(not500)



function start(){
app.listen(PORT,()=>{
    console.log('SERVER STARTED')
})}

module.exports={
    app,
    start,
};
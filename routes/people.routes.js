'use strict'


const express = require('express')
const {People} = require('../models/index')
const peopleRouter = express.Router()


peopleRouter.get('/people' , getPeople)
peopleRouter.get('/people/:id' , getOnePerson)
peopleRouter.post('/people' , createPerson)
peopleRouter.put('/people/:id' , updatePerson)
peopleRouter.delete('/people/:id' , deletePerson)

async function getPeople(req,res){
const allPeople = await People.findAll()
res.status(200).json(allPeople)
}

async function getOnePerson(req,res){
    const id = req.params.id
    const person = await People.findOne({
        where:{
            id :id
        }
    })
    res.status(200).json(person)
}

async function createPerson(req,res){
    const newPerson = req.body
    console.log('=================================')
    console.log(newPerson)
    console.log('=================================')
    const newPersonAdded = await People.create(newPerson);
    res.status(201).json(newPersonAdded)
}

async function updatePerson(req,res){
    const id =req.params.id
    const obj = reg.body 
    const foundPerson = await People.findOne({where:{id:id}})
    const updatedPerson = await foundPerson.update(obj)
    res.status(201).json(updatePerson)
}

async function deletePerson(req,res){
    const id = req.params.id 
    const deletedPerson = await People.destroy({where:{id:id}})
    res.status(204).json(deletePerson)
}

module.exports=peopleRouter
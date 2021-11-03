'use strict'


const {app} = require('../server')
const supertest = require('supertest')
const request = supertest(app)
const {db}=require('../models/index')



beforeAll(async ()=>{
        await db.sync();
    })


    afterAll(async()=>{
        await db.drop();
    })


describe('API Server Testing',()=>{
    test('handle invalid url', async ()=>{
       const response = await request.get('/not-found')
       expect(response.status).toEqual(404)
    })

   /* test('if theres a home route', async ()=>{
        const response = await request.get('/hello')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('All is good')
    })

    test('/data works', async ()=>{
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(response.body.time).toBeDefined()
    })*/

    test('can add person',async()=>{
        const response = await request.post('/people').send({
            firstName : 'munes',
            lastName : 'yasin'
        });
        expect(response.status).toBe(201)
    })
    
})


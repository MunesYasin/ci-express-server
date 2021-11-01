'use strict'


const {app} = require('../server')
const supertest = require('supertest')
const request = supertest(app)

describe('API Server Testing',()=>{
    test('handle invalid url', async ()=>{
       const response = await request.get('/not-found')
       expect(response.status).toEqual(404)
    })

    test('if theres a home route', async ()=>{
        const response = await request.get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('All is good')
    })

    test('/data works', async ()=>{
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(response.body.time).toBeDefined()
    })
})


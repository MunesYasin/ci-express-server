'use strict'

const {start} = require('./server')
const {db} = require('./models/index')



db.sync().then(
start()

)



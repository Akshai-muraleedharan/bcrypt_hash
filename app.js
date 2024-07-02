const express =require('express');
const app = express()

require('dotenv').config()
require('./db/index')


const logger =require('morgan')
const routes =require('./routes')


const port = process.env.PORT || 4005


app.use(express.json())
app.use(logger('dev'))
app.use('/',routes)

app.listen(port,()=>{
    console.log(`server connected on port no: ${port}`)
}) 
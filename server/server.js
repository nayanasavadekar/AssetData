const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
const mongoose = require ('mongoose')
const app = express()


app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

var corsOption = {
    origin:true
}
app.use(cors(corsOption))

app.use('./',(req,res)=>{
    res.send('Welcome!!')
})

const db = require('./module')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log('Conneted to DB!!')
})
.catch (err =>{
    console.log('DB Connection Failed!!',err)
    process.exit()
})

require ('./routes/asset.routes')(app)

const PORT = 5001;

app.listen(PORT,()=>{
    console.log (`Server started at port ${PORT}`)
})
const mongoose = require('mongoose')
const MONGODB_URL =process.env.MONGODB_URL;
const MONGODB_NAME =process.env.MONGODB_NAME;

mongoose.connect(`${MONGODB_URL}/${MONGODB_NAME}`)
.then(()=>{
    console.log("Hash DB connected succesfully");
})
.catch((err) => console.log(err))     
const userModel = require('../model/usersignup')
const userJoi = require('../validation/userSignupJoi')


const userSignup = async (req,res) =>{
    
    const data = req.body

    await userJoi.validateAsync(data);

    const saveData = new userModel(data)
    if(!saveData) throw new Error (400,error)
    await saveData.save();
    res.status(201).send({message:"data saved successfully"})
}

module.exports ={userSignup}
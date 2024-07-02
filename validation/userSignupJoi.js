const Joi = require('joi');

const signUpJoi = Joi.object({
    name:Joi.string(),
    email:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
     .required(),

    password:Joi.string()
    .required(),
})

module.exports =signUpJoi
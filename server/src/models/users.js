const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: {
        type: Number,
        required: true,
        unique: true
    },
    affiliationDate: Date,
    occupation: String,
    birthdate: Date,
    neas_discovered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'neas'
    }]
    
})

function validateUser(user) {

    const schema = Joi.object({
        name: Joi.string().required(),
        nickname: Joi.string(),
        email: Joi.string(),
        picture: Joi.string(),
        affiliatedNumber: {
            type: Joi.number().required()
        },
        affiliationDate: Joi.date(),
        occupation: Joi.string(),
        birthdate: Joi.date(),
        neas_discovered: Joi.array()
    })
    return schema.validate(user)

}

const User = mongoose.model('users', userSchema)

module.exports = User
module.exports.validate = validateUser
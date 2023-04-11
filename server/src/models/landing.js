const mongoose = require('mongoose')
const Joi = require('joi')

const landingSchema = new mongoose.Schema({
    name: String,
    id: String,
    nametype: String,
    recclass: String,
    mass: String,
    fall: String,
    year: String,
    reclat: String,
    reclong: String,
    geolocation: {latitude: String, longitude: String}
})

function validateLanding(landing) {
    const schema = Joi.object({
        name: Joi.string().required(),
        id: Joi.string(),
        nametype: Joi.string(),
        recclass: Joi.string(),
        mass: Joi.string(),
        fall: Joi.string(),
        year: Joi.string(),
        reclat: Joi.string(),
        reclong: Joi.string(),
        geolocation: {latitude: Joi.string(), longitude: Joi.string()}
    })

    return schema.validate(landing)
}

const Landing = mongoose.model('landings', landingSchema)



module.exports = Landing
exports.validateLanding = validateLanding
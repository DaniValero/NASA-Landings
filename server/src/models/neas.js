const mongoose = require('mongoose')

const Joi = require('joi')

const neasSchema = new mongoose.Schema({
    designation: String,
    discovery_date: String,
    h_mag: String,
    moid_au: String,
    q_au_1: String,
    q_au_2: String,
    period_yr: String,
    i_deg: String,
    pha: String,
    orbit_class: String
})

const Neas = mongoose.model('neas', neasSchema)

function validateNeas(neas) {

    const schema = Joi.object({
    designation: Joi.string(),
    discovery_date: Joi.string(),
    h_mag: Joi.string(),
    moid_au: Joi.string(),
    q_au_1: Joi.string(),
    q_au_2: Joi.string(),
    period_yr: Joi.string(),
    i_deg: Joi.string(),
    pha: Joi.string(),
    orbit_class: Joi.string()
    })

    return schema.validate(neas)
}


exports.validateNeas = validateNeas
module.exports = Neas
exports.neasSchema = neasSchema
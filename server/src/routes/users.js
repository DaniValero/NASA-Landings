const User = require('../../src/models/users')
const {validate} = require('../../src/models/users')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    if(req.query.email) {
    console.log(req.query)
    const result = await User.find({email: req.query.email})
    res.send(result)
    } else {
    const result = await User.find({})
    res.send(result)
    }
})

router.post('/create', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const user = new User (req.body)

    const newUser = await user.save()

    res.send("Se ha creado el usuario" + newUser).status(200)
})

router.put('/edit', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const result = await User.findOneAndUpdate({email: req.query.email}, req.body)

    res.send("Se ha actualizado el usuario" + result)
})

router.delete('/delete', async (req, res) => {
    console.log(req.query)

    const result = await User.findOneAndDelete({email: req.query.email})

    res.send("Se ha eliminado el usuario" + result)
})

module.exports = router


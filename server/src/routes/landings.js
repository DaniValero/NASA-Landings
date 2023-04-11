const Landing = require('../models/landing')

const express = require('express')
const router = express.Router()



router.get('/', async (req, res) => {

    if(req.query.minimum_mass) {
        const query = req.query.minimum_mass
        const result = await Landing.find({$expr : {$gt : [{$toDecimal : "$mass"}, +query]}})
        res.send(result).status(200)

    } else if (req.query.from && req.query.to) {
        const result = await Landing.find({year: {$gte: req.query.from, $lt: req.query.to}})
        res.send(result).status(200)

    } else if (req.query.from) {
        const query = req.query.from
        console.log(req.query)
        const result = await Landing.find({year: {$gte: query}})
        res.send(result).status(200)

    } else if (req.query.to) {
        const query = req.query.to
        console.log(query)
        console.log(req.query)
        const result = await Landing.find({year: {$lt: query}})
        res.send(result).status(200)
    } else if(req.query.recclass){
        const result = await Landing.find({recclass: `${req.query.recclass}`})
        res.send(result).status(200)
    } else {
        const result = await Landing.find({})
        res.send(result).status(200)
    }
}) 

router.get('/mass/:number', async (req, res) => {
    const result = await Landing.find({mass: `${req.params.number}`}).select

    res.send(result).status(200)
})

router.get('/class/:class', async (req, res) => {
    console.log(req.params.class)

    const result = await Landing.find({recclass: `${req.params.class}`})

    res.send(result).status(200)
})


router.post('/create', async (req, res) => {
    const landing = new Landing(req.body) 
    
    const newLanding = await landing.save()

    res.send(newLanding)
})

router.put('/edit/:id', async (req, res) => {
    const landing = await Landing.findOneAndUpdate({id: req.params.id}, req.body)

    res.send(landing)
})

router.delete('/delete/:id', async (req, res) => {
    const landing = await Landing.findOneAndDelete({id: req.params.id})

    res.send(landing)
})

module.exports = router

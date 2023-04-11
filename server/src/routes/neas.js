const Neas = require('../models/neas')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    if(req.query.class) {
        console.log(req.query)
        const neas = await Neas.find({$toLower: {orbit_class: `${req.query.class}`}})
        res.send(neas)

    } else if (req.query.from && req.query.to){
        console.log(req.query)
        const result = await Neas.find({discovery_date: {$gte: req.query.from, $lt: req.query.to}})
        res.send(result).status(200)

    } else if (req.query.from) {
        console.log(req.query)
        const result = await Neas.find({discovery_date: {$gte: req.query.from}})
        res.send(result).status(200)

    } else if (req.query.to) {
        console.log(req.query)
        const result = await Neas.find({discovery_date: {$lt: req.query.to}})
        res.send(result).status(200)
    } else {
        const result = await Neas.find({})
        res.send(result).status(200)
    }

})



router.post('/create', async (req,res) => {
    const neas = new Neas (req.body)

    const newNeas = await neas.save()

    res.send(newNeas)
})


router.put('/edit/:designation', async(req, res) => {
    const neas = await Neas.findOneAndUpdate({designation: req.params.designation}, req.body)

    res.send(neas)
})


router.delete('/delete/:designation', async (req, res) => {
    const neas = await Neas.findOneAndDelete({designation: req.params.designation})

    res.send(neas)
})



module.exports = router
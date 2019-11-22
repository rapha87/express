const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
    
} )

router.get('/produto/:id', (req, res) => {
    res.json({id: req.params.id, name: 'caneta'})
})

router.get('/cliente/:id', (req, res) => {
    res.json({id: req.params.id, nome: 'João'})
})

module.exports = router
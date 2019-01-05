const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000

app
.use(express.urlencoded({ extended: false }))

.get('/', (req, res) => {
    res.json('getUser')
})

.post('/', (req, res) => {
    let body = req.body

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            msg: 'El nombre es necesario'
        })   
    } else {
        res.json(body)
    }
})

.put('/user/:id', (req, res) => {
    let id = req.params.id
    res.json({
        id
    })
})

.delete('/', (req, res) => {
    res.json('deleteUser')
})
.listen(port, () => console.log(`Running in port ${port}`))

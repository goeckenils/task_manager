const express = require('express');
const router = express.Router();
const { Task } = require('../../models')

router.get('/', async (req, res) => {

    try {
        const findTasks = await Task.findAll()
        if(!findTasks) {
            res.json({
                msg: 'no entrys'
            })
        }
        console.log(findTasks)
        res.send(findTasks)
    }
    catch(err) {
        console.log(err)
        res.status(400).json({
            msg: 'error occured'
        })
    }
})
router.post('/', async (req, res) => {

    const { title, description } = req.body
    const authorId = '9ce9fb8b-3cf4-4504-806c-1245165b4179'

    try {
        const newTask = await Task.create({
            authorId,
            title,
            description, 
        })

        res.status(200)
        res.send(newTask)

    }

    catch(err) {
        console.log(err)
        res.status(500).json({
            msg: 'error occured'
        })
    }
})

module.exports = router
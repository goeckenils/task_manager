const express = require('express')
const { check, validationResult } = require('express-validator');
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { User } = require('../../models')



// Find all users 
router.get('/', async (req, res) => {
    try {
      const users = await User.findAll()
  
      return res.json(users)
    } catch(e) {
      return res.status(400).send(e)
    }
  })

// Find one user
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findOne({ where: { id:userId } })
        if(!user){
            return res.send('there is no user with this id')
        }
        return res.json(user)
    
    } catch(e) {
        return res.status(400).send(e)
    }
  })


//register a user
router.post('/',
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
    async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errror: errors.array() })
    }

    const { name, email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ where: { email } })

        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }]})
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt)

        // Creates user
        const newUser = await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
            avatar: avatar
        })

        if(newUser) {
            console.log(
                'jwt is möglich'
            )
        }

        res.json(newUser)
    }
    catch(err) {
       return res.status(400).send(err)
    }
})

  


  module.exports = router;
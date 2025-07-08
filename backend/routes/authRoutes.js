import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'
import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY
console.log(SECRET_KEY)

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    const checkEmail = await User.findOne({email})
    if(!checkEmail) return res.json({message: 'Invalid Email Id Entered'})
    const checkPassword = await bcrypt.compare(password, checkEmail.password)
    if(checkPassword){
        const bearerToken = jwt.sign({email}, SECRET_KEY, {expiresIn: '1h'})
        res.cookie('bearerCookie', bearerToken, {
            secure: false, 
            httpOnly: true,
            sameSite: 'lax'
        })
        res.json({
            message: 'You are successfully logged in', 
            bearerToken
        })
    }else{
        res.json({message: 'Invalid Password Entered'})
    }
})

router.post('/signup', async(req, res) => {
    const {email, password} = req.body
    const checkEmail = await User.findOne({email})
    if(checkEmail) return res.json({message: 'This Email Id already exists'})
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({email, password: hashedPassword})
    res.json({
        message: `User ${email} is created`
    })
})

router.get('/contributions', async(req, res) => {
    const tokenReceived = req.cookies.bearerCookie
    if(!tokenReceived) return res.json({message: 'Unable to Authenticate this user. Please login'})
   
    try {
        const verifiedToken = jwt.verify(tokenReceived, SECRET_KEY)
        if(verifiedToken) return res.json({ message: `Welcome to the contributions page: ${verifiedToken.email}` })
    } catch (err) {
        return res.json({ message: 'Unable to verify the token. Perhaps token expired' })
    }

})

export default router

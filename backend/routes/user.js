const express = require('express');
const zod =require("zod");
const User = require('../db').User;
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')
const  { authMiddleware } = require("../middleware");
const { Account } = require('../db');
const router = express.Router();

const signUpBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(3).max(32),
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(3).max(32)
})
router.post('/signup', async(req,res)=>{
    const {success} = signUpBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({message: "Incorrect inputs"})
    }

    const existingUser = await User.findOne({
        username: req.body.username
    }) 

    if(existingUser){
        return res.status(411).json({message: "Email already taken"})
    }

    const user = await User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

router.post('/signin', async (req,res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(!success){
        return res.json({msg:"wrong Email/password"})}

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({msg:"Error while login"})
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router;
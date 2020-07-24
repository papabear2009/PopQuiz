const bcrypt = require("bcrypt");
const router = require('express').Router();
const db = require('../models');

router.post('/signup',(req,res)=>{
    db.User.create({
        username:req.body.username,
        password:req.body.password
    }).then(userData=>{
        res.json(userData.id)
    }).catch(err=>{
        res.status(500).end();
    })
})

router.post("/", function (req, res) {
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            return res.status(404).send("no such user")
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    id: user.id,
                    username: user.username,
                }
                res.send("login successful!")
            } else {
                res.status(401).send("wrong password")
            }
        }
        res.json(userData);
    }).catch(err=>{
        return res.status(500).end();
    })
});

router.get("/readsessions",(req,res)=>{
    res.json(req.session)
})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.send('logged out!');
})

module.exports = router;
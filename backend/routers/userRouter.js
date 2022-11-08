const express = require('express');
const router=express.Router();
const Model=require("../models/userModel")

router.post( '/add',(req,res)=>{
    //console.log(req.body);
// to save data in the database 
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

})

router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err)
    })
});


router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    Model.find({email:req.params.email})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err)
    })
})

router.get('/getbyusername/:username',(req,res)=>{
    console.log(req.params.username);
    Model.find({username:req.params.username })
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err)
    })
    })

    router.get('/getbyid/:userid',(req,res)=>{
        console.log(req.params.userid);
        Model.findById(req.params.userid)
        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.json(err)
        })
        })
        router.put("/update/:userid", (req, res) => {
            console.log(req.params.userid)
            Model.findByIdAndUpdate(req.params.userid, req.body)
              .then((result) => {
                res.json(result)
              })
              .catch((err) => {
                console.error(err)
                res.json(err)
              })
          })


        router.delete('/delete/:userid',(req,res)=>{
            console.log(req.params.userid);
            Model.findByIdAndDelete(req.params.userid )
            .then((result) => {
                console.log(result);
                res.json(result);
            }).catch((err) => {
                console.error(err);
                res.json(err)
            })
            })
            router.post('/authenticate', (req, res) => {

                const formdata = req.body;
            
                Model.findOne({ email : formdata.email, password : formdata.password })
                .then((result) => {
                    // if email and password matches then result will contain user data
                    if(result){
                        res.status(200).json(result);
                    }else{
                      // if email and password doesn't match then result will be null
                        res.status(400).json({message : "Invalid email or password"});
                    }
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json(err);
                });
              })


module.exports=router;

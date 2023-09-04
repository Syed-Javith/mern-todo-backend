const express = require('express');
const task = require('../models/taskModel')
const user = require('../models/userModel')

const router = express.Router();


router.get('/user/:userid', async(req,res)=>{

    console.log("getting data...");
    let data = {
        user : null ,
        task : null 
    };
    await user.findOne( {
        userid : req.params.userid
    } )
    .then((result) => {
        // res.status(200).send(result);
        data.user = result;
        // data.push(result);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });


    await task.findOne({
        userid : req.params.userid
    })
    .then((result) => {
        data.task = result;
        // data.push(result);
        res.status(200).send(data);
    }).catch((err) => {
        res.status(400).send(err);
    });
    console.log(req.params);
})

router.post('/user/:userid',async(req,res)=>{

    console.log("making new user...");

    // console.log(req.body);
    let data = {
        user : null ,
        task : null 
    };
    await user.findOne( {
        userid : req.params.userid
    } )
    .then((result) => {
        // res.status(200).send(result);
        data.user = result;
        // data.push(result);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
    if(data.user != null){
        data.isUserAlreadyFound = true;
        res.status(400).send(data);
    }else{
        const newUser = new user(
            {
                userid : req.params.userid,
                userName : req.body.userName ,
                password : req.body.password
            }
        );
    
        const newTask = new task({
            userid : req.params.userid,
            task : [] 
        })
        console.log(newUser);
        await newUser.save()
        .then((result) => {
            console.log(result);
            // res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
     
        await newTask.save()
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
    }
    

})

router.post('/user/:userid/:taskid',async (req,res)=>{

    console.log("making new task...");
    const newTask = {
        taskid : req.params.taskid ,
        taskDesc : req.body.taskDesc ,
        taskDate : new Date()
    };

    console.log(newTask);

    console.log(req.params.userid);
    await task.updateOne(
        {
            userid : req.params.userid
        } , 
        {
            $push : {
                task : newTask
            }
        }
    )
    .then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });

    
})
 

router.patch('/user/:userid/:taskid',async (req,res)=>{

    await task.updateOne(
        {
            userid: req.params.userid,
        },
        { $pull : { task : { taskid : req.params.taskid } } }
    )
    .then((result) => {
        console.log(result);
        res.status(200).send(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });

})

router.delete('/user/:userid',async (req,res)=>{
    console.log(req.body);

    await user.deleteOne({
        userid : req.params.userid
    })
    .then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
})


module.exports = router;

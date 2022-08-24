let express = require('express')
let mongoose = require('mongoose')
let amount = require('./amount')
let cors = require('cors')

//create express app
let app = express()

//configure for cors
app.use(cors())

//connect to mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/bellsandwhistles")
let db = mongoose.connection

//check if connection was success
db.once("open",()=>{
    console.log("Connected to mongodb database")
})

//welcome api
app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to Bells & Whistles API!"
    })
})

//get the list of all bells and whistles for all friends
app.get("/get/friends", (req, res)=>{
    amount.find({},(error,data)=>{
        if(error){
            res.json(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

//add new friend to the mongodb 
app.post("/add/friend",(req,res)=>{

    //console.log(req)
    console.log(req.body)
    //create new amount model instance
    let newFriend = new amount()
    newFriend.name = req.body.name
    newFriend.bells = req.body.bells
    newFriend.whistles = req.body.whistles
    newFriend.save((error, result)=>{
        if(error){
            res.json(error)
        }else{
            res.json(result)
        }
    })
})

    res.json({
        message:"add is success"

    })

})

//make the app listen to port 4211
let PORT = 4211
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);

})
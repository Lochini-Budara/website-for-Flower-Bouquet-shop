{/*const express = require("express")
const mongoose = require('mongoose')
const cors = require ("cors")
const EmployeeModel = require ('./models/Users')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/flower_world");

app.post('/register',(req,res) =>{
    UsersModel.create(req.body)
    .then(user =>res.json(user))
    .catch(err => res.json(err))
})
app.listen(3001, () =>{
   console.log("server is running") 
})
   */}

   const express = require("express");
   const mongoose = require("mongoose");
   const cors = require("cors");
   const UsersModel = require("./models/Users");
   
   const app = express();
   app.use(express.json());
   app.use(cors());
   
   mongoose.connect('mongodb://localhost:27017/flower_world', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.log('Failed to connect to MongoDB:', err));
 
   app.post("/register", (req, res) => {
       UsersModel.create(req.body)
       .then(user => res.json(user))
       .catch(err => res.status(500).json(err));
   });
   
   app.listen(3001, () => {
       console.log("Server is running on port 3001");
   });
   

const express = require("express")
const api = express()
const router = require("./routes/index")

let port= 3000
api.listen(port, ()=>{
    console.log("server is runing on: " + port)
})
api.use("/", router)
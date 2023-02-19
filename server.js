const path =require("path")
const express=require("express")
const server=express()

const midCheckRequest=require("./middleware/midCheckRequest")
const routerDbError=require("./routers/routerDbError")
const routerIndex=require("./routers/routerIndex")
const routerLogin=require("./routers/routerLogin")
const routerHome=require("./routers/routerHome")
const routerAnother=require("./routers/routerAnother")

server.set("view engine","ejs")
server.set("views",path.join(__dirname,"./views"))

server.use(midCheckRequest)
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/dberror",routerDbError)
server.use("/",routerIndex)
server.use("/login",routerLogin)
server.use("/home",routerHome)
server.use("/another",routerAnother)

server.listen(3000)

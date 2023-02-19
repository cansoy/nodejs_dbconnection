const express=require("express")
const router=express.Router()
const midDbconnection=require("../middleware/midDbconnection")

router.use(midDbconnection)

router.get("/",(req,res)=>{
    res.redirect("/login")
})

module.exports=router
const express=require("express")
const router=express.Router()
const midDbconnection=require("../middleware/midDbconnection")

router.use(midDbconnection)

router.get("/",(req,res)=>{
    res.render("login")
})

router.post("/logged",async(req,res)=>{
    const reqBody=req.body
    console.log(reqBody)
    if (reqBody.name=="aa" && reqBody.pass=="aa") {
        console.log("ok")
        res.redirect("/home")
        return
    }
    res.redirect("/login")
})

module.exports=router
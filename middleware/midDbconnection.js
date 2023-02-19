const dbconnect=require("../db/dbconnect")

const midDbconnection=async(req,res,next)=>{
    const connection=await dbconnect()
    if (connection) {
        next()
        return
    } 
    else {
        res.redirect("/dberror")
    }
}

module.exports=midDbconnection
const midCheckRequest=(req,res,next)=>{
    console.log(req.path)
    next()
}

module.exports=midCheckRequest
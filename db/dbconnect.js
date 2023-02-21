const mongoose=require("mongoose")
mongoose.set('strictQuery', true)
const uri = "db-path";
const client =  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName:"db-name"
}

const dbconnect=async()=>{
    try {
        const connection=await mongoose.connect(uri,client)
        const readState=mongoose.connection.readyState
        if(readState==1){
            return true }
        else{
            return false
            }
    } 
    catch (error) {
        const readState=mongoose.connection.readyState
        return false
    }
}

module.exports=dbconnect

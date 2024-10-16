import mongoose from "mongoose";


type ConnectionObj={
    isConnected?:number,

}
const connection:ConnectionObj={}
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to data base")
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGO_URI || '',{})
        connection.isConnected = db.connections[0].readyState
        console.log(db)
    }catch (err){
        console.log("Connection is failed ",err)
        process.exit(1)

    }
}
export default dbConnect;
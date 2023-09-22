import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = "mongodb+srv://vedupadhye10:vedupadhye10@cluster0.7ub6ity.mongodb.net/test?retryWrites=true&w=majority";
const connect = async() =>{
   
    try{   
        console.log(process.env)
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch(error) {
        console.log(error)
        throw new Error("connection failed");
      
    }
}
export default connect;
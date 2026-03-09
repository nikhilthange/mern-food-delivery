//import mongoose from "mongoose";

//export const connectDB= async ()=>{
    //await mongoose.connect('mongodb+srv://nikhilthange:9820078156@cluster0.6ukal61.mongodb.net/food-del').then(()=> console.log("DB Connected")); 
//}

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};

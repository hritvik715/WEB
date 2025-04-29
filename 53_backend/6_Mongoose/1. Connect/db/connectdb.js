import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {//imp->this fxn will be asynchrs bcz it connect to the database
  try {
    await mongoose.connect(DATABASE_URL);//imp-> mongoose has a method connect 
    console.log("Database Connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;


// conncet method allow us to connect to the specific database  


//imp-> visit mongoose site and click quick start.........
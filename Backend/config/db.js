const mongoose = require('mongoose');

const connectDB = async () => {
try{
   await mongoose.connect("mongodb+srv://likhitha:Likki26@likhitha.php2ux6.mongodb.net/")
   console.log("MongoDB connected successfully");
}catch(err){
    console.log(err);
}
}
module.exports = connectDB;
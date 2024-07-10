const mongoose = require('mongoose');
const mongoURI = 'mongodb://arnobshoeb:gigbazar123@ac-ywkj5wm-shard-00-00.ygveghf.mongodb.net:27017,ac-ywkj5wm-shard-00-01.ygveghf.mongodb.net:27017,ac-ywkj5wm-shard-00-02.ygveghf.mongodb.net:27017/?ssl=true&replicaSet=atlas-iuhwa7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

module.exports = mongoDB;

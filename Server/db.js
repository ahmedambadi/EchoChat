const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(process.env.MONGOURL);
  console.log(`connected to DB at ${process.env.MONGOURL}`)
}


module.exports = connectDB;

const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config()
const port = process.env.PORT || 3001
const API = process.env.DATABASE_URL

mongoose.set('strictQuery',false);
const app = require("./app");

async function main(){
    await mongoose.connect(API);
    console.log("connected to database");
    app.listen(port,()=> console.log(`Server is running on 3001`));
};
main()
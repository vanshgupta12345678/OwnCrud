const express=require("express");
const dotenv=require("dotenv");
const {MongoDbConnect}=require("./Config/connection")
const app=express();
dotenv.config();
const port=process.env.PORT;
const dburl=process.env.URL;
const router=require(".//Routes/User");
app.use(express.json())
app.use("/api/",router)
app.listen(port,()=>{console.log(`Server Started at ${port}`)})
MongoDbConnect(dburl);
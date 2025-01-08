// const mongoose=require("mongoose");
// const router=express.router();
// router.post("/data",EnterData)
// module.exports=router;
const express=require("express");
const {EnterData,getUsers,updateData,deleteData}=require('../Controllers/User')
const router = express.Router();
router.post("/dataPost",EnterData);
router.get("/getdata",getUsers);
router.put("/updateData/:id", updateData)
router.delete("/deleteData/:id", deleteData)
// router.put('/updateUser/:userId', updateUser);
module.exports=router;

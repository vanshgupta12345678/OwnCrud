const user=require("../Models/Users");
const mongoose=require("mongoose");

//Create
exports.EnterData=async(req,res)=>{
    try {
        const{Fname,Lname,Email,Password}=req.body
        if(!Fname&&!Lname&&!Email&&!Password){
            return res.json({
                message:"Enter The Data"
            })
            // return res.json("Data Succesfully Inserted")
        }
    
        const SavedData=await user.create({
            Fname,Lname,Email,Password})
        
        console.log("Data Save Succesfully",SavedData);
        return res.json({
            message:"Data Succesfuly Saved"
        });
    }
     catch (error) {
        res.send(`Error`)
    }
   
}


//Read
exports.getUsers= async(req,res)=>{
    try {
        const Users=await user.find();
        return res.json(Users)
    } catch (error) {
        console.log("Error");
        return res.json("Error");
    }
}

exports.Update=async(req,res)=>{
    try {
        const Data=await user.findOneAndUpdate();
    } catch (error) {
        
    }
}

//Update
exports.updateData = async (req, res) => {
    try {
      const { Fname,Lname,Email,Password} = req.body;
  
      if (!Fname||!Lname||!Password|| !Email) {
        return res.status(400).json({ message: "Name and email are required" });
      }
  
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id, 
        { Fname,Lname,Email, Password }, 
        { new: true }    
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
  
    } catch (err) {
      console.error(err); 
      res.status(500).json({ message: "Error updating user data" });
    }
};


//Delete
exports.deleteData = async (req, res) => {
    try {
      const id  = req.params.id;
      const deletedUser = await user.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting user" });
    }
}

const mongoose=require('mongoose');
async function MongoDbConnect(URL) {
    try {
        await mongoose.connect(URL,({

        }))
        console.log("Database Connnected Succesfuly")
    } catch (error) {
        console.log(`Database Cannot Connected${error}`)
    }
}
module.exports={
    MongoDbConnect
}
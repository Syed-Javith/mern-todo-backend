const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.MONGO_URL;

mongoose.set('strictQuery', true);
connectToMongo = () => {
    // console.log(URL);
    mongoose.connect(URL , {
    useNewUrlParser : true , 
    useUnifiedTopology:true
  })
.then( () => {
    console.log("database connected");
})
.catch( 
    (err)=>{
        console.log(err);
    }
)
}

module.exports = connectToMongo ;
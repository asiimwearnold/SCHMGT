import config from "../config/config.mjs";
import app from './express.mjs'
import mongoose from 'mongoose'

// const dotenv = require('dotenv');
// dotenv.config();

const connectionParams ={useNewUrlParser: true, useUnifiedTopology: true}

/* Setting up mongoose........*/

mongoose.Promise = global.Promise
// try{
//    await mongoose.connect(config.mongoUri, connectionParams)
//    console.log('connected to MongoDb')
// }catch(err){
//     console.error(err)
// }



mongoose.connection.on('error', () =>{
    
    mongoose.connect(config.mongoUri, connectionParams)
    console.log('conected to the database')
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

/* writing our express ..server........*/
const App =  app.listen(config.port,(err)=>{
if(err){
    console.log(err)
}
console.info('Server started on port %s.', config.port);

    
}


)
export default App;
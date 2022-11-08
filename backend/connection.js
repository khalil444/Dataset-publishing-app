// importing mongoose package
const mongoose = require('mongoose');

const dbname=`mytestdb23`;
const url=`mongodb+srv://khalil:khalil@cluster0.q77dmrm.mongodb.net/DatasetPublisher?retryWrites=true&w=majority`

// async function-returns  promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});
module.exports=mongoose;

// synchronous-one by one
// asynchronous-simultaneously
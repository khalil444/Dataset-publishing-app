const {model,Schema}=require('../connection');
const myschema=new Schema({

email : String,
name : String,
password : String,
repeatpassword: String,
balance:{type:Number,default:0}
});
module.exports=model('user',myschema);
const mongoos = require('mongoose')



var userSchema=new mongoos.Schema({// mongoose.schema is a constructer which defines the deafult data type of each field in our database table ....
    // username: { type: String , required: true }, 
    // password:{type :String,required:true},   
    // email: { type: String }     
    "username" : "String",
  "password" : "String",
  "email" : "String"

},{timestamps:true});
module.exports=mongoos.model("User",userSchema);
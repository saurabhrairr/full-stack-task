const mongoose=require("mongoose")

const userdata=new mongoose.Schema({
      name:{

       type:String,
       require:true,
      },
      phonenumber:
      {
      type: Number,
      require:true
      },
     
      registertype:
      {
        type: String,
        require:true
      },
      email:{
       type:String,
       require:true,
       unique:true
      }

})
const userschema=mongoose.model("user",userdata)
module.exports=userschema
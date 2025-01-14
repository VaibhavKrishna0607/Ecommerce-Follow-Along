const mongoose = require("mongoose");
const bcrypt = require("bcrypt.js");
const jwt = require("jssorwebtoken");

const  userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter your Name"],
    },
    email:{
        type: String,
        required: [true, "Please Enter your Email"],
    },
    password :{
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    phoneNumber:{
        type: Number,
    },
    addresses:[
        {
            country:{typr: String,},
            city: {type: String,},
            address1: {type: String,},
            address2:{type:String,},
            zipCode:{type: Number},
            addressTYPE:{type:String},
        }
    ],
    role:{
        type: String,
        default: "user",
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            typr:String,
            required:true,
        },
    },
    createdAt:{
        type:DataTransfer,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,

})
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
}
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
module.exports = mongoose.model("User", userSchema);
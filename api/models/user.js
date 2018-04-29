const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//creating user schema in mongo db
const UserSchema=new Schema({
	email:{
		type: String,
		required:true,
		unique: true,
		// match is for correct email format validation
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password:{
		type: String,
		required: true
	}
});

//creating a coolection of user schema
const User=mongoose.model('user',UserSchema);

module.exports=User;
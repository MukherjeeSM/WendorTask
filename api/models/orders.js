const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

//create item schema model
const ItemSchema=new Schema({
	name:{
		type: String,
		required:[true,'Name field is required']
	},
	price:{
		type: Number
	},
	quantity:{
		type: Number
	},
	pos:{
		type: String
	}
});

//create order schema model
const OrderSchema=new Schema({
	totalItems:{
		type: String,
		required:[true,'totalItems field is required']
	},
	amt:{
		type: String
	},
	items:[{
		type: ObjectId,
		ref: ItemSchema
	}]
});

//creating collections of item and schema model
const Item=mongoose.model('items',ItemSchema);
const Order=mongoose.model('order',OrderSchema);

module.exports=Order;
module.exports=Item;
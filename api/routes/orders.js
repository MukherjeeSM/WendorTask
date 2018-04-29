const express =  require ('express');
const router = express.Router();
const Order = require('../models/orders');
const mongoose=require('mongoose');
const Item = require('../models/orders');

// fetching orders route
router.get('/',(req,res,next)=>{
	res.status(200).json({
		message: 'Orders were fetched.'
	});
});

//ceating orders route
router.post('/',(req,res,next)=>{
	const order = {
		totalItems: req.body.totalItems,
		amt: req.body.amt,
		items: {
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity,
			pos: req.body.pos
		}
	};
	
	// Item.create(req.body)
	// .then(
	// 	Order.create(req.body).then(function(order){
	// 	res.status(201).json(order);
	// 	})
	// )
	Order.create(req.body)
	.then(function(order){
		res.status(201).json(order);
	 })
	.catch(err => {
		console.log(err);
		res.status(500).json({
		error: err
		});
	});

	
});

router.get('/:orderId',(req,res,next)=>{
	res.status(200).json({ 
			message: 'Order details',
	 		id: req.params.orderId
 	})
});


//edit an order route
router.patch('/:orderId',(req,res,next)=>{
	Order.findByIdAndUpdate({_id: req.params.orderId}, req.body).then(function(){
		Order.findOne({_id: req.params.id}).then(function(order){
			res.status(200).json(order);
		});
	});
	
});

//delete an order route
router.delete('/:orderId',(req,res,next)=>{
	Order.findByIdAndRemove({_id: req.params.orderId}).then(function(order){
		res.status(200).json({
			order: order
		});
	});
});

module.exports = router;
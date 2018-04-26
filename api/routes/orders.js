const express =  require ('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
	res.status(200).json({
		message: 'Orders were fetched.'
	});
});

router.post('/',(req,res,next)=>{
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity
	};
	res.status(201).json({
		message: 'Orders are created',
		order: order
	});
});

router.get('/:orderId',(req,res,next)=>{
	// const id =  req.params.orderId;
	// if(id==='special'){
	// 	res.status(200).json({
	// 		message: 'You discovered special order ID',
	// 		id: id
	// 	});

	// }
	// else{
	// 	res.status(200).json({
	// 		message: 'You discovered normal order ID'
	// 	});

	// }
	res.status(200).json({
			message: 'Order details',
	 		id: req.params.orderId
 	})
});

router.patch('/:orderId',(req,res,next)=>{
	res.status(200).json({
		message: 'Updated order'
	});
});

router.delete('/:orderId',(req,res,next)=>{
	res.status(200).json({
		message: 'Deleted Order'
	});
});

module.exports = router;
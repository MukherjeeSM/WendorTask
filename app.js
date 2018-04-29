const express =  require ('express');
const app=express();
const morgan=require('morgan'); 
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

app.use(morgan('dev')); //logger middleware

//for parsing the body in json from the user
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//connecting our schemas to lacal mongo db
mongoose.connect('mongodb://localhost/DB');
mongoose.Promise=global.Promise;



//Handling CORSs
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Acces, Authorization"
		);
	if(req.method==='OPTIONS'){
		res.header('Access-Control-Allow-Methods','POST, PUT, PATCH, DELETE, GET');
		return res.status(200).json({});
	};
	next();
});

//redirecting to appropriate routes.
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);


//Error handling
app.use((req,res,next)=>{
	const error = new Error('Not Found');
	error.status=404;
	next(error);
});


app.use((error,req,res,next)=>{
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	})
});

module.exports= app;


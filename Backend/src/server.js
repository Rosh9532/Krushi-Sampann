const express = require('express');
const app = express();
const mongoose = require('mongoose');

const env=require("dotenv");
const cors = require('cors');


//routes
const farmerRoutes=require('./routes/farmer');
const buyerRoutes=require('./routes/buyer');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
const buyreqroutes=require('./routes/buyreq');
const contractRoutes=require('./routes/contract');
const bcontractRoutes=require('./routes/bcontract')
const intdataRoutes=require('./routes/idata');


//middlewares
app.use(cors())
app.use(express.json());
app.use('/api',farmerRoutes);
app.use('/api',buyerRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',buyreqroutes);
app.use('/api',contractRoutes);
app.use('/api',bcontractRoutes);
app.use('/api',intdataRoutes);
app.use('/public',express.static(path.join(__dirname,'uploads')));


// mongoose.connect('MONGODB_URI');
env.config();
mongoose.connect(`${process.env.MONGO_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
})
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("An error has occured", err));

app.listen(
    process.env.PORT || 2000, 
    console.log("Server started")
);

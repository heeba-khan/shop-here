const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authroutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to the Shopping Cart API');
//   });

app.get('/',(req,res)=>{
    try{
        res.send("API is working Heeba, Well Done!!")
    }
    catch(e){
        res.status(500).send({e:"Heeba, there is something wrong!!"})
    }
})

app.get('/api',(req,res)=>{
    try{
        res.send("/api route is working fine.")
    }catch(e){
        res.status(500).send({e:"Could not reach /api endpoint."})
    }
})

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
};


exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Raw password:', password);

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log('Hashed Password:', hashedPassword); 
    const user = await User.create({ username, email, password:hashedPassword });
    // await user.save();
    console.log("Registered User:",user);
    
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      // token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    console.log('User found:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Raw password from request:', password);
    console.log('Stored hashed password in DB:', user.password);
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', passwordMatch);

    if (!passwordMatch) {
      console.log('Password does not match.');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('Password match successful');
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });

  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: 'Server error' });
  }
};




// const Rajorpay = require('razorpay');
// require('dotenv').config();

// exports.instance = new Rajorpay({
//     key_id: process.env.RAZORPAY_KEY,
//     key_secret: process.env.RAZORPAY_SECRET
// })


const Razorpay = require('razorpay');
require('dotenv').config({ path: '../../.env' }); // 👈 Correct relative path

// Optional: log to verify environment variables are loaded
console.log('RAZORPAY_KEY:', process.env.RAZORPAY_KEY);
console.log('RAZORPAY_SECRET:', process.env.RAZORPAY_SECRET);

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET
});

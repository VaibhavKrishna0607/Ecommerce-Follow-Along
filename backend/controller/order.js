const express = require('express');
const router = express.Router();
const Order = require('../model/order');
const User = require('../model/user');

router.post('/place-order', async (req, res) => {
    try{
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if(!orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: 'Order Items are required' });
        }
        if(!shippingAddress) {
            return res.status(400).json({ message: 'Shipping Address is required' });
        }
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new Order({
                user: user._id,
                orderItems: [item],
                shippingAddress,
                totalAmount,
            });
            return order.save();
        });
        const orders = await Promise.all(orderPromises);

        await Cart.deleteMany({user: user._id});
        res.status(201).json({ message: 'Order placed successfully',orders});
    
    } catch(error) {
        console.error('Error placing order',error);
        res.status(500).json({ message: error.message });
        
    }
});

router.get('/my-orders',async(req,res)=>{
    try{
        const {email} = req.query;
        if(!email){
            return res.status(400).json({message:'Email is required'});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        const orders = await Order.find({user:user._id});
        res.status(200).json({orders});
    }catch(error){
        console.error('Error fetching the order:',error);
        res.status(500).json({message:error.message});
    }
});

module.exports = router;

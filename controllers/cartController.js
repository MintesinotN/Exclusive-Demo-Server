import userModel from '../models/userModel.js'

const firstAddToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        const itemIndex = cartData.findIndex(item => item.id === req.body.itemId);
        if (itemIndex === -1) {
            cartData.push({ id: req.body.itemId, count: 1 });
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Added To Cart"});
        } else {
            res.json({success:true,message:"Already Found In Cart"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

// add items to user cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        const itemIndex = cartData.findIndex(item => item.id === req.body.itemId);
        if(itemIndex !== -1) {
            cartData[itemIndex].count = cartData[itemIndex].count + 1;
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Added To Cart"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}


// remove items from user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        const itemIndex = cartData.findIndex(item => item.id === req.body.itemId);
        if(itemIndex !== -1) {
            cartData[itemIndex].count = cartData[itemIndex].count - 1;
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Added To Cart"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

const totalRemoveFromCart = async (req,res) => {
    try {
        await userModel.findByIdAndUpdate(
            req.body.userId,
            { $pull: { cartData: { id: req.body.itemId } } }
        )
        res.json({success:true,message:"Removed From Cart"})
    }
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData:cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {firstAddToCart,addToCart,removeFromCart,totalRemoveFromCart,getCart}
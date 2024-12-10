import userModel from "../models/userModel.js";

const listUser = async(req,res)=>{
    
    try{
        const Users = await userModel.find({});
        res.json({success:true,data:Users})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
const addUser = async(req,res)=>{

    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: req.body.cartData,
        addressData: req.body.addressData
    })

    try{
        await user.save();
        res.json({success:true, message:"User Added"})
    } catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

const updateCart = async (req, res) => {
    const userId = req.params.id;
    const { cartData } = req.body;
  try {
    const updatedCart = await userModel.findByIdAndUpdate(
        userId,  // Query to find the user by _id
        { $set: { cartData } },  // Update the cartData field
        { new: true }  // Option to return the updated document
      );

      if (!updatedCart) {
          return res.status(404).json({ message: 'Cart not found' });
      }

      res.status(200).json({ message: `Cart ID ${userId} updated successfully`, user: updatedCart });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating cart', error: error.message });
  }
};

const updateAddress = async (req, res) => {
    const userId = req.params.id;
    const { AddressData } = req.body;
  try {
    const updatedAddress = await userModel.findByIdAndUpdate(
        userId ,  // Query to find the user by _id
        { $set: { AddressData } },  // Update the AddressData field
        { new: true }  // Option to return the updated document
      );

      if (!updatedAddress) {
          return res.status(404).json({ message: 'Address not found' });
      }

      res.status(200).json({ message: `Address ID ${userId} updated successfully`, user: updatedAddress });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating address', error: error.message });
  }
};

export {listUser,addUser,updateCart,updateAddress}
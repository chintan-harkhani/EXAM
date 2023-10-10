const {OrderModel} =require("../models");

const CreateOrder = async (reqBody) =>{
      return OrderModel.create(reqBody)
};

const OrderList = async (req ,res) =>{
    return OrderModel.find().populate("product", {product_name:1 ,product_img:1,product_price:1})
}

const OrderId  =async (orderId) =>{
     return OrderModel.findById(orderId);
}

const UpdateOrder = async (orderId , updateBody)=>{
    return OrderModel.findByIdAndUpdate(orderId ,{ $set  : updateBody})
};

const DeleteOrder =async (orderId) =>{
    return OrderModel.findByIdAndDelete (orderId)
};

const FindUser =async (user) =>{
    return OrderModel.findOne({user});
}

module.exports ={
    CreateOrder,
    OrderList,
    OrderId,
    DeleteOrder,
    UpdateOrder,
    FindUser
}
const {ProductModel} =require("../models");

const CreateProduct = async (reqBody) =>{
      return ProductModel.create(reqBody)
};

const ProductList = async (req ,res) =>{
    return ProductModel.find()
}

const ProductId  =async (productId) =>{
     return ProductModel.findById(productId);
}

const UpdateProduct = async (productId , updateBody)=>{
    return ProductModel.findByIdAndUpdate(productId ,{ $set  : updateBody})
};

const DeleteProduct =async (productId) =>{
    return ProductModel.findByIdAndDelete (productId)
};

const FindName =async (product_name) =>{
    return ProductModel.findOne({product_name});
}

module.exports ={
    CreateProduct,
    ProductList,
    ProductId,
    DeleteProduct,
    UpdateProduct,
    FindName
}
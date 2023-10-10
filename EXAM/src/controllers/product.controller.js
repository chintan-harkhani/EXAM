const {ProductService} = require("../services");


const CreateProduct = async (req ,res) =>{
    try {
          const reqBody = req.body;
           const name = await  ProductService.FindName(reqBody.product_name);
        if (name) {
            throw new Error("Alerydy name add")
        }
          let Product = await ProductService.CreateProduct(reqBody);
          if(!Product){
            throw new Error(" Product Data Not Created...!");
          }
          res.status(200).json({
            success: true,
            message: "Product SuucessFully Created ..!",
            data: Product
        });
    } catch (error) {
        res.status(400).json({success :false , message : error.message})
    }
}

const Productlist = async ( req ,res)  =>{
    try {
        const listProduct = await ProductService.ProductList(req, res);
        res.status(200).json({
            success: true,
            message: " Product List Get SuucessFully !.....",
            data: listProduct
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const Productid = async (req ,res) =>{
    try {
        const productId = req.params.productId;
        const productid = await ProductService.ProductId(productId);
        if (!Productid) {
            throw new Error("Product Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Product Data SuucessFully Get!....",
            data: Productid
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const deleteProduct  = async (req ,res) =>{
        try {
            const productId = req.params.productId;
        const productid = await ProductService.ProductId(productId);
        if (!productid) {
            throw new Error("Product Data Not Found !...");
        };
            await ProductService.DeleteProduct(productId);
            res.status(200).json({
                success: true,
                message: "Product Data SuccessFully Deleted!....",
            });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
}

const UpdateProduct = async ( req ,res) =>{
    try {
        const productId = req.params.productId;
        const productid = await ProductService.ProductId(productId);
        if (!productid) {
            throw new Error("Product Data Not Found !...");
        };
        await ProductService.UpdateProduct(productId, req.body);
        res.status(200).json({
            success: true,
            message: "Product Data SuucessFully Updated!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

module.exports = {
     CreateProduct,
     Productlist,
     deleteProduct,
     Productid,
     UpdateProduct

}
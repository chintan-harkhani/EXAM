const { ProductController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const { ProductValidation } = require("../../validations");
const router = express.Router();

//create Product
router.post("/create",
upload.single("product_img"),
    validate(ProductValidation.CreateProduct),
    ProductController.CreateProduct
);

router.get("/list",
    ProductController.Productlist
);

router.get("/list/:productId",
    ProductController.Productid
);

router.delete("/delete/:productId",
    ProductController.deleteProduct
);

router.put("/update/:productId",
    ProductController.UpdateProduct
);
module.exports = router;
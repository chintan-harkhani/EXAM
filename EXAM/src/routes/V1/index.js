const express = require("express");
const UserRouter  = require("./user.route");
const TokenRouter  = require("./token.router");
const ProductRouter  = require("./product.router");
const OrderRouter  = require("./order.router");

const router = express.Router();

router.use("/user" , UserRouter);
router.use("/token" , TokenRouter);
router.use("/product" , ProductRouter);
router.use("/order" , OrderRouter);

module.exports = router;
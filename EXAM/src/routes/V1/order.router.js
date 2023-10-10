const { OrderController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { OrderValidation } = require("../../validations");
const router = express.Router();

//create Order
router.post("/create",
    validate(OrderValidation.CreateOrder),
    auth(),
    OrderController.CreateOrder
);

router.get("/list",
    OrderController.Orderlist
);

router.get("/list/:orderId",
    OrderController.Orderid
);

router.delete("/deleter/:orderId",
    OrderController.deleteOrder
);

router.put("/update/:orderId",
    OrderController.UpdateOrder
);
module.exports = router;
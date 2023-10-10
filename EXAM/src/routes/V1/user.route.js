const { UserController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { UserValidation } = require("../../validations");
const router = express.Router();

//create User
router.post("/create",
    validate(UserValidation.CreateUser),
    auth(),
    UserController.Createuser
);

router.get("/list",
    UserController.Userlist
);

router.get("/list/:userId",
    UserController.Userid
);

router.delete("/deleter/:userId",
    UserController.deleteUser
);

router.put("/update/:userId",
    UserController.Updateuser
);
module.exports = router;
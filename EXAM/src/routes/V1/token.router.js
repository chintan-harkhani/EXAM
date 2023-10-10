const express = require("express");
const {TokenController} =require("../../controllers");
const validate = require("../../middlewares/validate");
const {TokenValidation} =require("../../validations");

const router = express.Router();

//create Token
router.post("/ctoken",
  validate(TokenValidation.Createtoken),
  TokenController.createToken
);

// VerifyToken
router.get("/verifytoken",
TokenController.Verifytoken
);

module.exports = router;
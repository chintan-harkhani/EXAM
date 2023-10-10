const {TokenService} =require("../services");

const createToken = async (req, res) => {
    try {
        const reqBody = req.body;
        const tokencreate = await TokenService.Createtoken(reqBody);
        reqBody.token = tokencreate;
        
        const Savetoken = await TokenService.Savetoken(reqBody);
        res.status(200).json({
            success: true,
            message: "SuucessFully Token Created...!",
            data: Savetoken,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
};

const Verifytoken = async (req ,res)=>{
    res.status(200).json({
     success :true,
     message : "Verified Token SuucessFully ...!!",
     data :req.user,
    });
};

//export
module.exports = {
    createToken,
    Verifytoken
}

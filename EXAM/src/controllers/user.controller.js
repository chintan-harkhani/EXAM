const {UserService} = require("../services");


const Createuser = async (req ,res) =>{
    try {
          const reqBody = req.body;
          
          const email = await UserService.FindEmailId(reqBody.email);
        if (email) {
            throw new Error("Email Already Created!");
        }
          let user = await UserService.CreateUser(reqBody);
          if(!user){
            throw new Error(" User Data Not Created...!");
          }
          res.status(200).json({
            success: true,
            message: "User SuucessFully Created ..!",
            data: user
        });
    } catch (error) {
        res.status(400).json({success :false , message : error.message})
    }
}

const Userlist = async ( req ,res)  =>{
    try {
        const listuser = await UserService.UserList(req, res);
        res.status(200).json({
            success: true,
            message: " User List Get SuucessFully !.....",
            data: listuser
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const Userid = async (req ,res) =>{
    try {
        const userId = req.params.userId;
        const userid = await UserService.UserId(userId);
        if (!userid) {
            throw new Error("User Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "User Data SuucessFully Get!....",
            data: userid
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const deleteUser  = async (req ,res) =>{
        try {
            const userId = req.params.userId;
            const userid = await UserService.UserId(userId);
            if (!userid) {
                throw new Error("User Data Not Found !...");
            };
            await UserService.DeleteUser(userId);
            res.status(200).json({
                success: true,
                message: "User Data SuccessFully Deleted!....",
            });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
}

const Updateuser = async ( req ,res) =>{
    try {
        const userId = req.params.userId;
        const userid = await UserService.UserId(userId);
        if (!userid) {
            throw new Error("User Data Not Found !...");
        };
        await UserService.UpdateUser(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User Data SuucessFully Updated!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

module.exports = {
     Createuser,
     Userlist,
     deleteUser,
     Userid,
     Updateuser

}
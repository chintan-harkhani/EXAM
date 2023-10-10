const {UserModel} =require("../models");

const CreateUser = async (reqBody) =>{
      return UserModel.create(reqBody)
};

const UserList = async (req ,res) =>{
    return UserModel.find()
}

const UserId  =async (userId) =>{
     return UserModel.findById(userId);
}

const UpdateUser = async (userId , updateBody)=>{
    return UserModel.findByIdAndUpdate(userId ,{ $set  : updateBody})
};

const DeleteUser =async (userId) =>{
    return UserModel.findByIdAndDelete (userId)
};

const FindEmailId =async (email) =>{
    return user.findOne({email});
}

module.exports ={
    CreateUser,
    UserList,
    UserId,
    DeleteUser,
    UpdateUser,
    FindEmailId
}
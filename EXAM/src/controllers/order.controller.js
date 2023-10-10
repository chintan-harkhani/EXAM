const {OrderService} = require("../services");


const CreateOrder = async (req ,res) =>{
    try {
          const reqBody = req.body;
          
          const user = await OrderService.FindUser(reqBody.user);
        if (user) {
            throw new Error("user Already Created!");
        }
          let Order = await OrderService.CreateOrder(reqBody);
          if(!Order){
            throw new Error(" Order Data Not Created...!");
          }
          res.status(200).json({
            success: true,
            message: "Order SuucessFully Created ..!",
            data: Order
        });
    } catch (error) {
        res.status(400).json({success :false , message : error.message})
    }
}

const Orderlist = async ( req ,res)  =>{
    try {
        const listOrder = await OrderService.OrderList(req, res);
        res.status(200).json({
            success: true,
            message: " Order List Get SuucessFully !.....",
            data: listOrder
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const Orderid = async (req ,res) =>{
    try {
        const orderId = req.params.orderId;
        const orderid = await OrderService.OrderId(orderId);
        if (!orderid) {
            throw new Error("Order Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Order Data SuucessFully Get!....",
            data: Orderid
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

const deleteOrder  = async (req ,res) =>{
        try {
            const orderId = req.params.orderId;
            const orderid = await OrderService.OrderId(orderId);
            if (!orderid) {
                throw new Error("Order Data Not Found !...");
            };
            await OrderService.DeleteOrder(orderId);
            res.status(200).json({
                success: true,
                message: "Order Data SuccessFully Deleted!....",
            });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
}

const UpdateOrder = async ( req ,res) =>{
    try {
        const orderId = req.params.orderId;
        const orderid = await OrderService.OrderId(orderId);
        if (!orderid) {
            throw new Error("Order Data Not Found !...");
        };
        await OrderService.UpdateOrder(orderId, req.body);
        res.status(200).json({
            success: true,
            message: "Order Data SuucessFully Updated!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
}

module.exports = {
     CreateOrder,
     Orderlist,
     deleteOrder,
     Orderid,
     UpdateOrder

}
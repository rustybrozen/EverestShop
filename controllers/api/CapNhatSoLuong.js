const User = require('../../models/User'); 
const express = require('express');
const router = express.Router();



//Đường dẫn API để lấy giữ liệu số sản phẩm đã vào giỏ hàng
//Được update liên tục 
router.get('/load', async (req, res) => {
    let quantity;
    let user

    if (req.session.user) {

        const userId = req.session.user._id;
        const user = await User.findById(userId);
        quantity = user.productQuantity;
        totalPrice = user.totalPriceInCrat
    } else {
        quantity = null;
        user = null
        totalPrice = null
    }
    res.json({ quantity, user, totalPrice });
});


module.exports = router;

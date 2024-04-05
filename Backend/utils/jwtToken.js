// Create and send token and save in the cookie.

const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    console.log('varen');
    // Create Jwt token
    // const token = "efgaeWFG3R23R32313412r3t2gferergbvfdrtHTG424T3TWGFDR32454T5Y4WQ345435QEWwa";
    const token = user.getJwtToken();
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + 100 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    console.log(statusCode);

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

module.exports = sendToken;
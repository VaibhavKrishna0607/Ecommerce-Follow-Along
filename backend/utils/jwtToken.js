const jwt = require("jsonwebtoken");

const secretKey = "yourSecretKey";

function generateToken(payload,expiresIn = '1h'){
    return jwt.sign(payload, secretKey, {expiresIn});
}

function verifyToken(token){
    try{
        const decoded = jwt.verify(token, secretKey);
        return {valid: true,decoded};

}catch(error){
    return {valid: false,error};
}
}

module.exports = {generateToken,verifyToken};
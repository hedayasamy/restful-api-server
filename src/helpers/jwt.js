import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const signUser = function ({email, name, password}, expiresIn = '1h') {
    return jwt.sign({email, name, password}, process.env.JWT_ACTIVATION_KEY, expiresIn )
}

const verifyUser = function(token) {
    return jwt.verify(token, process.env.JWT_ACTIVATION_KEY);
}

const jwtService = Object.freeze({
    signUser,
    verifyUser
})

export default jwtService
export { signUser, verifyUser }
import jwtService from '../helpers/jwt.js'
import {usersDb} from '../data-access/index.js'

const requireAuth = async function (req, res, next) {
    const token = req.headers.jwt;

    if (token) {
        try {
            const decodedToken = jwtService.verifyUser(token);
            let user = await usersDb.findByEmail({ email: decodedToken.email })

            if (user.length) {
                user = user[0];
                req.query.userId = user.id;
                req.headers.authentication = {
                    username : decodedToken.email,
                    password : decodedToken.password
                }
                next();
            } else {
                return res.sendStatus(400);
            }
        } catch (error) {
            console.log(error);
            return res.sendStatus(400)
        }
    } else {
        console.log('user is not authenticated.');
        return res.sendStatus(401)
    }
}

const authenticationMiddleware = Object.freeze({
    requireAuth,
})

export default authenticationMiddleware
export { requireAuth }
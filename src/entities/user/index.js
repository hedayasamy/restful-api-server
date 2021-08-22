import buildMakeUser from './user.js'
import bcrypt from 'bcrypt'
import jwtService from '../../helpers/jwt.js'

function hashPassword (password) {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
}

const makeUser = buildMakeUser(hashPassword, jwtService)

export default makeUser
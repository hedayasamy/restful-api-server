import makeRegisterUser from './register.js'
import makeActivateAccoount from './activate-account.js'
import makeLogin from './login.js'
import {usersDb} from '../../data-access/index.js'
import jwtService from '../../helpers/jwt.js'
import mailerService from '../../helpers/mailer.js'
import bcrypt from 'bcrypt'

function comparePasswords (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

const registerUser = makeRegisterUser({ usersDb, jwtService, mailerService })
const activateAccount = makeActivateAccoount({ usersDb, jwtService })
const login = makeLogin( usersDb, jwtService, comparePasswords )

const userAuthuenticationService = Object.freeze({
    registerUser,
    activateAccount,
    login
})

export default userAuthuenticationService
export { registerUser, activateAccount, login }

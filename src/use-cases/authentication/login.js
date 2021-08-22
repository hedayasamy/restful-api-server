export default function makeLogin ( usersDb, jwtService, comparePassword ) {
    return async function login ({ user }) {
        let userData = await usersDb.findByEmail({ email: user.email })

        if (!userData.length) {
            throw new Error ('There is no user with such email!')
        }

        userData = userData[0];

        if (!userData.verified) {
            throw new Error ('User is not verified.')
        }

        if (!comparePassword(user.password, userData.password)) {
            throw new Error ('Password is wrong!')
        }

        return await jwtService.signUser({ 
            email : user.email,
            password: user.password, 
            name: user.name 
        }, { expiresIn : "1h" });
    }
  }
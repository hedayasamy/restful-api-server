export default function buildMakeUser (hashPassword, jwtService) {
    return function makeUser ({
      email,
      name,
      createdOn = Date.now(),
      modifiedOn = Date.now(),
      verified = false,
      password,
      id,
    } = {}) {
      if (!email) {
        throw new Error('User must have an email.')
      }
      if (!name) {
        throw new Error("User must have a name.")
      }
      if (!password) {
        throw new Error('User must have a password.')
      }
      if (password.length < 6) {
        throw new Error('Password should be at least 6 characters.')
      }
      
      const emailFormat = /\S+@\S+\.\S+/;

      if (!emailFormat.test(email)) {
        throw new Error('Please enter a valid email.')
      }

      return Object.freeze({
        getEmail: () => email,
        getCreatedOn: () => createdOn,
        getName: () => name,
        getId: () => id,
        getPassword: () => hashPassword(password),
        getModifiedOn: () => modifiedOn,
        isVerified: () => verified,
        getSecretToken: () => jwtService.signUser({email, name, password}, {expiresIn : "20m"}),
        verify: () => {
            verified = true
        },
        unverify: () => {
            verified = false
        }
      })

    }
  }
  
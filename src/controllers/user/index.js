import {
    registerUser,
    activateAccount,
    login
  } from '../../use-cases/authentication/index.js'
  import makeRegisterUser from './post-register.js'
  import makeActivateAccount from './activate-account.js'
  import makeLogin from './login.js'

  const postRegisterUser = makeRegisterUser({ registerUser })
  const postActivateAccount = makeActivateAccount({ activateAccount });
  const postLogin = makeLogin({ login });
  
  const userAuthenticationController = Object.freeze({
    postRegisterUser,
    postActivateAccount,
    postLogin
  })
  
  export default userAuthenticationController
  export { postRegisterUser, postActivateAccount, postLogin }
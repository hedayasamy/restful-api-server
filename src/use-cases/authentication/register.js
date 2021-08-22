import makeUser from '../../entities/user/index.js'
export default function makeRegisterUser ({ usersDb, mailerService }) {
  return async function registerUser ({ userData }) {
    const user = makeUser(userData);
    const exists = await usersDb.findByEmail({ email: user.getEmail() })

    if (exists.length) {
      throw new Error('A user with that email already exists. Please choose another email!');
    }

    await usersDb.insert({
      createdAt: user.getCreatedOn(),
      email: user.getEmail(),
      id: user.getId(),
      modifiedOn: user.getModifiedOn(),
      password: user.getPassword(),
      name: user.getName(),
      verified: user.isVerified(),
      secretToken: user.getSecretToken(),
    });

    //To Do generate activation link dynamically

    const mailData = {
      to: user.getEmail(),
      subject: 'Account Activation Link',
      html : `<h2> Please click on given link to activate your account </h2>
            <form style="display: none" action="http://localhost:3000/activate-account/${user.getSecretToken()}" method="post">
              <button type="submit" id="button_to_link"> </button>
            </form>
           <label style="text-decoration: underline" for="button_to_link">
             Activation Link 
           </label>`
    }

    await mailerService.send({mailData});
  }
}
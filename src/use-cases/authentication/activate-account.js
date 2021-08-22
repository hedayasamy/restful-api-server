export default function makeActivateAccount ({ usersDb }) {
  return async function activateAccoount ({ token }) {
    let user = await usersDb.findByToken( { token });

    if (!user.length) {
        throw new Error('This user doesn\'t exist or has been verified. Try to login to your account.');
    }

    user = user[0];

    return await usersDb.verifyUser({id : user.id });
  }
}
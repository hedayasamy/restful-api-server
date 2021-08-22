export default function makeListChecks ({ checksDb }) {
    return async function listChecks ({ user } = {}) {
      if (!user) {
        throw new Error('You must supply a user id.')
      }

      return await checksDb.findByUserId({
        user,
      })
    }
  }
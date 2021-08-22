export default function makeRegisterUser ({ registerUser } ) {
    return async function postRegisterUser (httpRequest) {
      try {
        const user = await registerUser({ userData : httpRequest.body.user })
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
          body: { statusMessage : "please check your email to verify your account." },
        }
      } catch (e) {
        console.log(e);
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  
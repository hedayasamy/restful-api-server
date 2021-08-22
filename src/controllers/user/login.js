export default function makinLogin ({ login }) {
    return async function postLogin (httpRequest) {
      try {
        const token = await login({ user : httpRequest.body.user })
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          body: {statusMessage : 'user has been logged in successfully!', token : token} ,
        }
      } catch (e) {
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
  
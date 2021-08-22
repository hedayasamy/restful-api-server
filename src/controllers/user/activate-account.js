export default function makeActivateAccount ({ activateAccount }) {
    return async function postActivateAccount (httpRequest) {
      try {
        const user = await activateAccount({ token : httpRequest.params.token })
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          body: {statusMessage : 'Your account has been activated successfully. You can now login to your account!'} ,
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
  
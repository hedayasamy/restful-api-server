export default function makePostCheck ({ addCheck }) {
    return async function postCheck (httpRequest) {
      try {
        const user = httpRequest.query.userId;
        let { ...checkInfo } = httpRequest.body.check
        checkInfo.user = user;
        const authentication = httpRequest.headers.authentication

        const check = await addCheck(
          checkInfo,
          authentication
        )
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
          body: { check }
        }
      } catch (e) {
        console.log(e)
  
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
export default function makeGetChecks ({ listChecks }) {
    return async function getChecks (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const userChecks = await listChecks({
          userId: httpRequest.query.userId
        })
        return {
          headers,
          statusCode: 200,
          body: userChecks
        }
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
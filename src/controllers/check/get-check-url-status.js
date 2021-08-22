export default function makeGetCheckUrlStatus ({ checkUrlStatus }) {
    return async function getCheckUrlStatus (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const checkStatus = await checkUrlStatus({
          id: httpRequest.params.id,
          user: httpRequest.headers.authentication
        })
        return {
          headers,
          statusCode: 200,
          body: checkStatus
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
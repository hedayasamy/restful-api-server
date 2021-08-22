export default function makeDeleteCheck ({ removeCheck }) {
    return async function deleteCheck (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const deleted = await removeCheck({ id: httpRequest.params.id })
        return {
          headers,
          statusCode: 200,
          body: { deleted }
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
export default function makePatchCheck ({ editCheck }) {
    return async function patchCheck (httpRequest) {
      try {
        const { ...checkInfo } = httpRequest.body
        const toEdit = {
          ...checkInfo,
          id: httpRequest.params.id
        }
        const check = await editCheck(toEdit)
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 200,
          body: { check }
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
export default function makeChangeCheckStatus ({ editCheck }) {
    return async function changeStatusCheck (httpRequest) {
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
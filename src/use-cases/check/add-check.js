import makeCheck from '../../entities/check/index.js'
export default function makeAddCheck ({ checksDb }) {
  return async function addCheck (checkInfo, authentication) {
    const check = makeCheck(checkInfo)

    return await checksDb.insert({
      name: check.getName(),
      url: check.getUrl(),
      path: check.getPath(),
      timeout: check.getTimeout(),
      protocol: check.getProtocol(),
      port: check.getPort(),
      interval: check.getInterval(),
      authentication: check.getAuthentication(),
      threshold: check.getThreshold(),
      webhook: check.getWebhook(),
      httpHeaders: check.getHttpHeaders(),
      assert: check.getAssert(),
      user: check.getUser(),
      tags: check.getTags(),
      ignoreSSL: check.isIgnoreSSL(),
      authentication: {
        username: authentication.username,
        password: authentication.password,
      },
    })
  }
}
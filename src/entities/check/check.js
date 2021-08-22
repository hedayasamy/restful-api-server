import supportedProtocols from '../../constants/supported-protocols.js';
import checkStatuses from '../../constants/check-statuses.js';
export default function buildMakeCheck () {
    return function makeCheck ({
      name,
      url,
      protocol,
      path = '',
      port = '',
      webhook = '',
      timeout ,
      interval,
      threshold,
      authentication,
      httpHeaders,
      assert,
      tags,
      ignoreSSL,
      modifiedOn = Date.now(),
      createdOn = Date.now(),
      id,
      status,
      user,
      urlStatus
    } = {}) {
      if (!user) {
        throw new Error('Check must have a user.')
      }
      if (!url) {
        throw new Error('Check must have a url.')
      }
      if (!name) {
        throw new Error('Check must have a name.')
      }
      if (!protocol) {
        throw new Error('Check must have a protocol.')
      }
      if (!Object.values(supportedProtocols).includes(protocol)) {
        throw new Error('Invalid Protocol. Checks only support http, https and tcp protocols.')
      }
      if (!threshold) {
        threshold = 1;
      }
      if (!timeout) {
        timeout = 5;
      }
      if (!interval) {
        interval = 600;
      }
      if (!status) {
        status = checkStatuses.ACTIVE;
      }

      return Object.freeze({
        getName: () => name,
        getCreatedOn: () => createdOn,
        getId: () => id,
        getUrl: () => url,
        getThreshold: () => threshold,
        getTimeout: () => timeout,
        getInterval: () => interval,
        getProtocol: () => protocol,
        getPort: () => port,
        getPath: () => path,
        getWebhook: () => webhook,
        getAuthentication: () => authentication,
        getHttpHeaders: () => httpHeaders,
        getAssert: () => assert,
        getTags: () => tags,
        isIgnoreSSL: () => ignoreSSL,
        getModifiedOn: () => modifiedOn,
        getStatus: () => status,
        getUrlStatus: () => urlStatus,
        getUser: () => user,
      })

    }
  }
  
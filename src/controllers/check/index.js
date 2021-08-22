  import {
    addCheck,
    editCheck,
    listChecks,
    removeCheck,
    checkUrlStatus
  } from '../../use-cases/check/index.js'
  import makeDeleteCheck from './delete-check.js'
  import makeGetChecks from './get-checks.js'
  import makePostCheck from './post-check.js'
  import makePatchCheck from './patch-check.js'
  import makeGetCheckUrlStatus  from './get-check-url-status.js'
  
  const deleteCheck = makeDeleteCheck({ removeCheck })
  const getChecks = makeGetChecks({
    listChecks
  })
  const postCheck = makePostCheck({ addCheck })
  const patchCheck = makePatchCheck({ editCheck })
  const getCheckUrlStatus = makeGetCheckUrlStatus({ checkUrlStatus })
  
  const CheckController = Object.freeze({
    deleteCheck,
    getChecks,
    postCheck,
    patchCheck,
    getCheckUrlStatus
  })
  
  export default CheckController
  export { deleteCheck, getChecks, postCheck, patchCheck, getCheckUrlStatus }
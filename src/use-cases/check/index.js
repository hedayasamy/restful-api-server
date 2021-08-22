
import makeAddCheck from './add-check.js'
import makeEditCheck from './edit-check.js'
import makeRemoveCheck from './remove-check.js'
import makeListChecks from './list-checks.js'
import makeListCheckUrlStatus from './list-check-url-status.js'
import {checksDb, usersDb} from '../../data-access/index.js'
import NotificationService from '../../helpers/notification-factory.js'

const addCheck = makeAddCheck({ checksDb })
const editCheck = makeEditCheck({ checksDb })
const listChecks = makeListChecks({ checksDb })
const removeCheck = makeRemoveCheck({ checksDb })
const checkUrlStatus = makeListCheckUrlStatus({ checksDb, NotificationService })

const CheckService = Object.freeze({
  addCheck,
  editCheck,
  listChecks,
  removeCheck,
  checkUrlStatus
})

export default CheckService
export { addCheck, editCheck, listChecks, removeCheck, checkUrlStatus }
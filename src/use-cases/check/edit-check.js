import makeCheck from './index.js'
export default function makeEditCheck ({ checksDb }) {
  return async function editCheck ({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('You must supply an id.')
    }

    const existing = await checksDb.findById({ id })

    if (!existing) {
      throw new RangeError('Check not found.')
    }

    const check = makeCheck({ ...existing, ...changes, modifiedOn: null })

    const updated = await ChecksDb.update({
      id: check.getId(),
      status: check.getStaus(),
    })
    return { ...existing, ...updated }
  }
}
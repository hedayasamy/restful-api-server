export default function makeRemoveCheck ({ checksDb }) {
  return async function removeCheck ({ id } = {}) {
    if (!id) {
      throw new Error('You must supply a Check id.')
    }

    let checkToDelete = await checksDb.findById({ id })

    if (!checkToDelete.length) {
      return deleteNothing()
    }

    checkToDelete = checkToDelete[0];

    return hardDelete(checkToDelete.id)
  }

  function deleteNothing () {
    return {
      message: 'Check not found, nothing to delete.'
    }
  }

  async function hardDelete (check) {
    await checksDb.remove({id : check})
    return {
      message: 'Check deleted.'
    }
  }
}
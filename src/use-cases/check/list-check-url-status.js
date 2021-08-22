export default function makeListCheckUrlStatus ({ checksDb, NotificationService }) {
  return async function checkUrlStatus ({id, user}) {
    if (!id) {
      throw new Error('You must supply an id.')
    }

    var existing = await checksDb.findById({ id })

    if (!existing.length) {
      throw new RangeError('Check not found.')
    }

    existing = existing[0];

    if (existing.url_status == 'down') {
        const notificationChannel = NotificationService.createNotification('mailer');
        const mailData = {
          to: user.username,
          subject: 'Alert URL is down',
          html : `<h2> Please note that this url ${existing.url} is now down <h2>`
        }
    }

    return existing.urlStatus;
  }
}
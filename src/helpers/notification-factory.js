import mailer from './mailer.js'

const notification = { mailer };

const createNotification = function(type) {
    return notification[type];
}

const NotificationService = Object.freeze({
    createNotification,
})

export default NotificationService
export { createNotification }
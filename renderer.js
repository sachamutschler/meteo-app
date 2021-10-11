const NOTIFICATION_TITLE = 'Titre'
const NOTIFICATION_BODY = 'Notification du Processus de rendu. Cliquez pour écrire dans la console.'
const CLICK_MESSAGE = 'Notification cliquée'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => console.log(CLICK_MESSAGE)

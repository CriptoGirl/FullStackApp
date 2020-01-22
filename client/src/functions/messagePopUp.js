import { Dialog, Loading } from 'quasar'

export function infoPopUp (message) {
  Loading.hide()
  Dialog.create({
    title: 'Info',
    message: message
  })
}

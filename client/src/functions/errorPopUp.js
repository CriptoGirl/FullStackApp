import { Dialog, Loading } from 'quasar'

export function errorPopUp (errorMessage) {
  Loading.hide()
  Dialog.create({
    title: 'Error',
    message: errorMessage
  })
}

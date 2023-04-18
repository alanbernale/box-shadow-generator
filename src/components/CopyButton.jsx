import { IconClipboardCheck } from '@tabler/icons-react'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import '../styles/toastify.css'

export default function CopyButton ({ boxShadow }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(boxShadow)
      .then(() => {
        Toastify({
          text: '😁 Se copió el código al portapapeles.',
          position: 'left',
          className: 'toastify-success'
        }).showToast()
      })
      .catch(err => {
        console.error(err.message)
        Toastify({
          text: '⚠️ ¡Ups! Sucedió algo, inténtalo nuevamente.',
          position: 'left',
          className: 'toastify-error'
        }).showToast()
      })
  }

  return (
    <button type='button' className='application__copy' onClick={handleCopy}>
      Copy <IconClipboardCheck />
    </button>
  )
}

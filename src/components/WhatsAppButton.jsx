import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/VSQSVPTUM3KBG1"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Falar com a Rosa Fitness no WhatsApp"
    >
      <MessageCircle size={21} />

      <span>
        Falar no WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton
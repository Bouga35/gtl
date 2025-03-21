import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Send } from 'lucide-react'
import { Link } from "react-router-dom"

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormState((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formState.privacyAccepted) {
      alert("Veuillez accepter la politique de confidentialité pour continuer.")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacyAccepted: false,
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Envoyez-nous un message</h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Votre numéro de téléphone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows={5}
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formState.privacyAccepted}
              onChange={handleCheckboxChange}
              className="mt-1"
              required
            />
            <Label htmlFor="privacyAccepted" className="text-sm font-normal">
              J'accepte la{" "}
              <Link to="/politique-de-confidentialite" className="text-blue-600 hover:underline">
                politique de confidentialité
              </Link>{" "}
              et le traitement de mes données personnelles.
            </Label>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
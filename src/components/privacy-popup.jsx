import { useState, useEffect } from "react"
import { X } from 'lucide-react'
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function PrivacyPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already accepted the privacy policy
    const hasAccepted = localStorage.getItem("privacyAccepted")

    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptPrivacy = () => {
    localStorage.setItem("privacyAccepted", "true")
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50"
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-lg overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-slate-800">Politique de Confidentialité</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto">
              <p className="text-gray-700 mb-4">
                GRITEL s'engage à protéger la vie privée des utilisateurs de son site web. En utilisant notre site, vous
                acceptez notre politique de confidentialité.
              </p>

              <h4 className="font-semibold text-slate-800 mb-2">Collecte d'informations</h4>
              <p className="text-gray-700 mb-4">
                Nous collectons des informations personnelles (nom, email, téléphone) lorsque vous remplissez un
                formulaire de contact, ainsi que des informations de navigation et des cookies pour améliorer votre
                expérience.
              </p>

              <h4 className="font-semibold text-slate-800 mb-2">Utilisation des informations</h4>
              <p className="text-gray-700 mb-4">
                Les informations collectées sont utilisées pour personnaliser votre expérience, améliorer notre site
                web, et vous contacter si nécessaire.
              </p>

              <p className="text-gray-700">
                Pour plus d'informations, veuillez consulter notre{" "}
                <Link to="/politique-de-confidentialite" className="text-blue-600 hover:underline">
                  politique de confidentialité complète
                </Link>
                .
              </p>
            </div>

            <div className="p-4 bg-gray-50 flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={() => setIsOpen(false)} className="border-slate-300">
                Plus tard
              </Button>
              <Button onClick={acceptPrivacy} className="bg-blue-600 hover:bg-blue-700 text-white">
                J'accepte
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PrivacyPopup
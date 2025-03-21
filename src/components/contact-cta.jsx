import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from "react-router-dom"

function ContactCTA() {
  return (
    <div className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet avec nous ?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en installations électriques et
            télécommunications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+212 5XX XX XX XX</span>
            </div>
          </div>

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/contact">
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactCTA
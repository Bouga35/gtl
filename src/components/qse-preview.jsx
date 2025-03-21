import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from "react-router-dom"

function QSEPreview() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Notre Engagement QSE</h2>
            <p className="text-gray-700 mb-6">
              Chez GRITEL, la Sécurité et la Santé au Travail ainsi que la Qualité sont au cœur de notre politique QSE.
              Nous appliquons des protocoles de sécurité rigoureux pour protéger nos équipes sur les chantiers.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Certification ISO 9001 obtenue en 2019</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Formations régulières sur la gestion des risques</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Évaluations des risques sur chaque chantier</p>
              </div>
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/engagement-qse">
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Certification ISO 9001"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md mt-8">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Équipe GRITEL avec équipements de sécurité"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Formation sécurité GRITEL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md mt-8">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Chantier GRITEL sécurisé"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default QSEPreview
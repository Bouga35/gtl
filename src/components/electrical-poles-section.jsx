import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

function ElectricalPolesSection() {
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
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Installation de Poteaux Électriques</h2>
            <p className="text-gray-700 mb-6">
              GRITEL possède une expertise reconnue dans l'installation de poteaux électriques pour les réseaux de
              distribution d'électricité. Notre équipe qualifiée assure l'installation complète, de l'étude préliminaire
              à la mise en service.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Installation professionnelle</h3>
                  <p className="text-gray-600">
                    Pose de poteaux électriques conformes aux normes de sécurité les plus strictes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Sécurité garantie</h3>
                  <p className="text-gray-600">
                    Respect des distances de sécurité et des normes électriques en vigueur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Maintenance régulière</h3>
                  <p className="text-gray-600">
                    Services de maintenance préventive et corrective pour assurer la longévité des installations.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/projets">
                Voir nos projets d'installation
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
              <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Installation de poteaux électriques"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Équipe technique sur chantier"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Technicien en intervention"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Réseau électrique installé"
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

export default ElectricalPolesSection
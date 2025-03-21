import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Network, Wifi, Server } from 'lucide-react'

function NetworkInstallationsSection() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Installations Réseaux Télécoms</h2>
            <p className="text-gray-700 mb-6">
              GRITEL conçoit et déploie des infrastructures de télécommunications performantes pour les entreprises et
              les opérateurs. Nos solutions couvrent tous les aspects des réseaux modernes, de la fibre optique aux
              systèmes sans fil.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Network className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Réseaux fibre optique</h3>
                  <p className="text-gray-600">
                    Installation et raccordement de réseaux fibre optique haute performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wifi className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Antennes et relais</h3>
                  <p className="text-gray-600">
                    Installation d'antennes et de relais pour les réseaux mobiles et sans fil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Infrastructure réseau</h3>
                  <p className="text-gray-600">
                    Conception et déploiement d'infrastructures réseau complètes pour entreprises.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/projets">
                Découvrir nos installations réseaux
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
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Installation réseau fibre optique"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1539020140153-e8c237293e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Antenne télécom"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Serveurs et équipements réseau"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Câblage réseau structuré"
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

export default NetworkInstallationsSection
import { motion } from "framer-motion"
import { ArrowRight, Zap } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const backgroundImages = [
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Installation électrique industrielle",
    title: "Installations électriques",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Réseau de télécommunications",
    title: "Réseaux télécoms",
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Systèmes intelligents",
    title: "Solutions innovantes",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Maintenance et support",
    title: "Support technique",
  },
]

function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-blue/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              GRITEL, <span className="text-blue-600">activement connecté à demain</span>
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              Experts en installations électriques et télécommunications depuis 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/services">Nos services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {backgroundImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative rounded-lg overflow-hidden shadow-lg h-64 ${index % 2 !== 0 ? "mt-8" : ""}`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4">
                      <p className="text-white/90 text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-slate-800 text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Zap className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">Solutions complètes</h3>
                <p className="text-slate-300">Électricité, télécoms, maintenance</p>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <span className="font-bold text-white">15+</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Années d'expérience</h3>
                <p className="text-slate-300">Expertise reconnue depuis 2008</p>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <span className="font-bold text-white">100+</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Projets réalisés</h3>
                <p className="text-slate-300">Pour des clients de référence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
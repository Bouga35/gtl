import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"

function AboutPreview() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Mr GRIOU Mohamed, Président de GRITEL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-lg z-0" />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Mot du Président</h2>
            <p className="text-gray-700 mb-4">
              "Chez GRITEL, nous croyons en un avenir où l'innovation électrique et télécom façonne un monde plus
              connecté et plus performant.{" "}
              <span className="font-semibold text-blue-700">'Activement connecté à demain'</span> n'est pas seulement
              notre devise, c'est l'essence même de notre engagement."
            </p>
            <p className="text-gray-700 mb-6">- Mr GRIOU Mohamed</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/a-propos">
                Découvrir notre histoire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPreview
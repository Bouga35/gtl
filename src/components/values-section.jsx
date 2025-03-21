import { motion } from "framer-motion"
import { Award, Lightbulb, Star, Users } from 'lucide-react'

function ValuesSection({ fullWidth = false }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className={fullWidth ? "" : "container mx-auto px-4"}>
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Valeurs
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ces valeurs guident notre mission et notre vision, "Activement connectés à demain".
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Engagement</h3>
            <p className="text-gray-700">Offrir des services de qualité et satisfaire nos clients.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Innovation</h3>
            <p className="text-gray-700">Adopter les nouvelles technologies pour des solutions performantes.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Excellence</h3>
            <p className="text-gray-700">Respecter les normes les plus strictes en qualité et sécurité.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Esprit d'équipe</h3>
            <p className="text-gray-700">Avancer ensemble grâce à la collaboration et au partage.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ValuesSection
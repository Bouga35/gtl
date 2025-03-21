import { motion } from "framer-motion"
import { Zap, Network, Cpu, Database } from 'lucide-react'

function ServicesSection() {
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
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Services
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Solutions complètes pour vos projets d'installations électriques et télécommunications
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={item}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Installations Électriques</h3>
            <p className="text-slate-600">
              Conception et installation de systèmes électriques pour entreprises et industries.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Network className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Réseaux Télécoms</h3>
            <p className="text-slate-600">Déploiement et maintenance de réseaux de télécommunications performants.</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Systèmes Intelligents</h3>
            <p className="text-slate-600">
              Solutions intelligentes pour optimiser la gestion énergétique de vos installations.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Maintenance</h3>
            <p className="text-slate-600">Services de maintenance préventive et corrective pour vos installations.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesSection
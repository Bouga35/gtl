import { motion } from "framer-motion"

function Timeline() {
  const events = [
    {
      year: "2008",
      title: "Création de GRITEL",
      description:
        "Fondation de GRITEL le 10 octobre 2008, spécialisée dans les installations électriques et télécommunications.",
    },
    {
      year: "2017",
      title: "Collaboration directe avec les opérateurs",
      description:
        "GRITEL franchit une étape importante en collaborant directement avec les opérateurs, plutôt que de passer par des prestataires.",
    },
    {
      year: "2019",
      title: "Certification ISO 9001",
      description:
        "Obtention de la certification ISO 9001, attestant de notre engagement envers la qualité et la satisfaction de nos clients.",
    },
    {
      year: "2021",
      title: "Nouveau siège à Aïn Sebaâ",
      description:
        "Le changement de notre siège à Aïn Sebaâ a marqué une nouvelle phase de croissance, nous permettant d'optimiser nos opérations et de mieux répondre aux exigences du marché.",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:w-1/2 md:pr-8 md:pl-8 flex justify-center md:justify-end">
              <div
                className={`bg-white p-6 rounded-lg shadow-md max-w-md ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
              >
                <div className="text-xl font-bold text-blue-600 mb-2">{event.title}</div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>

            <div className="relative flex items-center justify-center md:w-0">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">
                {event.year.slice(-2)}
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8 md:pr-8 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
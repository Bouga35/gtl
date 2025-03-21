import { motion } from "framer-motion"

const clients = [
  {
    name: "INWI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Orange",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Maroc Telecom",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 150,
    height: 60,
  },
  {
    name: "OCP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Finetech",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Infra",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "BTS Telecom",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 150,
    height: 60,
  },
  {
    name: "Camusat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Telcam",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
  {
    name: "Isolux Corsán",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 150,
    height: 60,
  },
  {
    name: "Inabensa",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bruv46lnvxshSd4wGB8AMQZvIKKkO7.png",
    width: 120,
    height: 60,
  },
]

function ClientShowcase() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ils nous font confiance
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des partenaires de renom nous font confiance pour leurs projets d'installations électriques et
            télécommunications.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-12">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`client-1-${index}`}
                  className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-[200px] h-[100px]"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set of logos for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`client-2-${index}`}
                  className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-[200px] h-[100px]"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientShowcase
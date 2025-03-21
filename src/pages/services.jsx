import { Button } from "../components/ui/button"
import { ArrowRight, Zap, Network, Cpu, Database } from 'lucide-react'
import { Link } from "react-router-dom"

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Nos Services</h1>

        <p className="text-lg text-gray-700 mb-12">
          GRITEL propose une gamme complète de services dans les domaines des installations électriques et
          télécommunications, adaptés aux besoins spécifiques de chaque client.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={<Zap className="h-8 w-8 text-blue-600" />}
            title="Installations Électriques"
            description="Conception et installation de systèmes électriques complets pour les entreprises, respectant les normes de sécurité les plus strictes."
            image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
          />

          <ServiceCard
            icon={<Network className="h-8 w-8 text-blue-600" />}
            title="Réseaux Télécommunications"
            description="Déploiement et maintenance de réseaux de télécommunications performants pour assurer une connectivité optimale."
            image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
          />

          <ServiceCard
            icon={<Cpu className="h-8 w-8 text-blue-600" />}
            title="Systèmes Intelligents"
            description="Intégration de solutions intelligentes pour optimiser la gestion énergétique et la performance des installations."
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
          />

          <ServiceCard
            icon={<Database className="h-8 w-8 text-blue-600" />}
            title="Maintenance & Support"
            description="Services de maintenance préventive et corrective pour garantir la fiabilité et la longévité de vos installations."
            image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
          />
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Notre Approche</h2>
          <p className="text-gray-700 mb-6">
            Chez GRITEL, chaque projet est traité avec une approche personnalisée, tenant compte des spécificités et des
            exigences de nos clients. Notre processus comprend :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Analyse des besoins</h3>
              <p className="text-gray-700 text-sm">
                Étude approfondie de vos exigences pour proposer des solutions adaptées.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Conception & Planification</h3>
              <p className="text-gray-700 text-sm">
                Élaboration de plans détaillés et d'un calendrier d'exécution précis.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Réalisation & Suivi</h3>
              <p className="text-gray-700 text-sm">Mise en œuvre par nos équipes qualifiées avec un suivi rigoureux.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nos Clients</h2>
          <p className="text-gray-700 mb-8">
            GRITEL est fier de collaborer avec des entreprises de renom dans divers secteurs d'activité.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
                <img
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Client ${i}`}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="mb-6">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  image,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-blue-800 ml-3">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default ServicesPage
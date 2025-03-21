import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function OrganizationChartPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Organigramme</h1>
        <p className="text-lg text-gray-700 mb-12">
          Découvrez la structure organisationnelle de GRITEL, conçue pour assurer une gestion efficace de nos projets et
          garantir la satisfaction de nos clients.
        </p>

        {/* Organigramme principal */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Organigramme GRITEL</h2>

            <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600&q=80"
                alt="Organigramme de GRITEL"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-lg font-medium">Organigramme à insérer ici</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/equipe">Découvrir notre équipe</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Structure des départements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-8">Nos Départements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DepartmentCard
              title="Direction Générale"
              description="Définit la stratégie globale de l'entreprise et supervise l'ensemble des opérations."
              responsibilities={[
                "Planification stratégique",
                "Gestion des ressources",
                "Relations avec les partenaires",
                "Supervision des départements",
              ]}
            />

            <DepartmentCard
              title="Département Technique"
              description="Responsable de la planification et de l'exécution des projets d'installation."
              responsibilities={[
                "Conception des solutions",
                "Gestion des projets",
                "Supervision des chantiers",
                "Maintenance des installations",
              ]}
            />

            <DepartmentCard
              title="Département QSE"
              description="Veille au respect des normes de qualité, de sécurité et environnementales."
              responsibilities={[
                "Gestion des certifications",
                "Formation à la sécurité",
                "Audits et contrôles",
                "Amélioration continue",
              ]}
            />

            <DepartmentCard
              title="Département Commercial"
              description="En charge du développement commercial et des relations clients."
              responsibilities={[
                "Prospection commerciale",
                "Gestion des appels d'offres",
                "Suivi client",
                "Développement de partenariats",
              ]}
            />
          </div>
        </section>

        {/* Processus de travail */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Notre Processus de Travail</h2>

          <div className="relative">
            {/* Ligne horizontale */}
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-blue-200 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                number="1"
                title="Analyse des Besoins"
                description="Étude approfondie des exigences du client pour proposer des solutions adaptées."
              />

              <ProcessStep
                number="2"
                title="Conception"
                description="Élaboration de plans détaillés et d'un calendrier d'exécution précis."
              />

              <ProcessStep
                number="3"
                title="Réalisation"
                description="Mise en œuvre par nos équipes qualifiées avec un suivi rigoureux."
              />

              <ProcessStep
                number="4"
                title="Maintenance"
                description="Support continu et maintenance pour garantir la performance des installations."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function DepartmentCard({ title, description, responsibilities }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <h4 className="font-medium text-blue-700 mb-2">Responsabilités :</h4>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
        {number}
      </div>
      <div className="bg-white mt-4 p-4 rounded-lg shadow-md w-full">
        <h3 className="font-semibold text-blue-800 mb-2 text-center">{title}</h3>
        <p className="text-gray-700 text-sm text-center">{description}</p>
      </div>
    </div>
  )
}

export default OrganizationChartPage
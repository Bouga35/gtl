import { Mail, Linkedin } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Notre Équipe</h1>
        <p className="text-lg text-gray-700 mb-12">
          Chez GRITEL, notre force réside dans notre équipe de professionnels qualifiés et passionnés. Découvrez les
          personnes qui font de GRITEL un acteur de référence dans le domaine des installations électriques et
          télécommunications.
        </p>

        {/* Direction */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-8 pb-2 border-b border-gray-200">Direction</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Mr GRIOU Mohamed"
              position="Président Directeur Général"
              description="Fondateur de GRITEL, M. GRIOU apporte plus de 20 ans d'expérience dans le secteur des installations électriques et télécommunications. Sa vision et son leadership ont permis à GRITEL de devenir un acteur majeur du marché."
              linkedin="#"
              email="m.griou@gritel.ma"
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Nom du Directeur"
              position="Directeur Général"
              description="Fort d'une solide expérience dans la gestion de projets d'envergure, notre Directeur Général supervise l'ensemble des opérations de GRITEL et veille à l'excellence de nos services."
              linkedin="#"
              email="directeur@gritel.ma"
            />
          </div>
        </section>

        {/* Responsables de Départements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-8 pb-2 border-b border-gray-200">
            Responsables de Départements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Nom du Responsable"
              position="Directeur Technique"
              description="Responsable de la planification et de l'exécution technique de tous nos projets d'installation."
              linkedin="#"
              email="technique@gritel.ma"
              compact
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Nom du Responsable"
              position="Responsable QSE"
              description="Garant de notre politique Qualité, Sécurité et Environnement sur tous nos chantiers."
              linkedin="#"
              email="qse@gritel.ma"
              compact
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Nom du Responsable"
              position="Directeur Commercial"
              description="En charge du développement commercial et des relations avec nos clients et partenaires."
              linkedin="#"
              email="commercial@gritel.ma"
              compact
            />
          </div>
        </section>

        {/* Équipe Technique */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-8 pb-2 border-b border-gray-200">Équipe Technique</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <TeamMember
              image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Technicien 1"
              position="Technicien Spécialisé"
              description="Expert en installations électriques et télécommunications."
              minimal
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Technicien 2"
              position="Technicien Spécialisé"
              description="Expert en installations électriques et télécommunications."
              minimal
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Technicien 3"
              position="Technicien Spécialisé"
              description="Expert en installations électriques et télécommunications."
              minimal
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              name="Technicien 4"
              position="Technicien Spécialisé"
              description="Expert en installations électriques et télécommunications."
              minimal
            />
          </div>
        </section>

        {/* Rejoignez-nous */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Rejoignez Notre Équipe</h2>
          <p className="text-gray-700 mb-6">
            GRITEL est toujours à la recherche de talents passionnés pour renforcer son équipe. Si vous êtes intéressé
            par une carrière dans le domaine des installations électriques et télécommunications, n'hésitez pas à nous
            contacter.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Postuler</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

function TeamMember({
  image,
  name,
  position,
  description,
  linkedin,
  email,
  compact = false,
  minimal = false,
}) {
  if (minimal) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-blue-800">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{position}</p>

        {!compact && <p className="text-gray-700 mb-4">{description}</p>}
        {compact && <p className="text-gray-700 mb-4 text-sm">{description}</p>}

        {(linkedin || email) && (
          <div className="flex gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamPage
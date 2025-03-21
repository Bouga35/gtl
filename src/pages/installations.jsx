import ElectricalPolesSection from "../components/electrical-poles-section"
import NetworkInstallationsSection from "../components/network-installations-section"
import ProjectCatalog from "../components/project-catalog"

function InstallationsPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Nos Installations</h1>

          <p className="text-lg text-gray-700 mb-12">
            GRITEL est spécialisée dans les installations électriques et de télécommunications de haute qualité. Notre
            expertise couvre l'installation de poteaux électriques, le déploiement de réseaux fibre optique,
            l'installation d'antennes et bien plus encore.
          </p>
        </div>
      </div>

      <ElectricalPolesSection />
      <NetworkInstallationsSection />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Nos Projets Récents</h2>
            <p className="text-gray-700">
              Découvrez une sélection de nos projets récents en matière d'installations électriques et de
              télécommunications.
            </p>
          </div>

          <ProjectCatalog />
        </div>
      </div>
    </div>
  )
}

export default InstallationsPage
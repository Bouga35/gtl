import ProjectCatalog from "../components/project-catalog"

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Nos Projets</h1>

        <p className="text-lg text-gray-700 mb-12">
          GRITEL a réalisé de nombreux projets d'installations électriques et télécommunications pour des clients de
          renom à travers le Maroc. Découvrez ci-dessous une sélection de nos réalisations les plus significatives.
        </p>

        <ProjectCatalog />
      </div>
    </div>
  )
}

export default ProjectsPage
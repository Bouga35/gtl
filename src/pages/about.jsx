import Timeline from "../components/timeline"
import ValuesSection from "../components/values-section"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">À Propos de GRITEL</h1>

        {/* President's Message */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Mot du Président</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mr GRIOU Mohamed, Président de GRITEL"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 font-semibold">Mr GRIOU Mohamed</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Chez GRITEL, nous croyons en un avenir où l'innovation électrique et télécom façonne un monde plus
                connecté et plus performant. "Activement connecté à demain" n'est pas seulement notre devise, c'est
                l'essence même de notre engagement.
              </p>
              <p className="text-gray-700 mb-4">
                Spécialistes des installations électriques et télécommunications, nous accompagnons des grandes
                entreprises et des partenaires de renom en leur fournissant des solutions fiables, sécurisées et
                adaptées aux évolutions technologiques. Travailler avec ces acteurs majeurs témoigne de la confiance
                qu'ils nous accordent, de notre expertise et de notre capacité à répondre aux exigences les plus
                strictes.
              </p>
              <p className="text-gray-700 mb-4">
                Notre approche repose sur des valeurs fortes : qualité, sécurité et responsabilité. Nous nous engageons
                à respecter les normes les plus exigeantes, à assurer la sécurité de nos équipes et à minimiser notre
                impact environnemental.
              </p>
              <p className="text-gray-700 mb-4">
                Ensemble, avec nos collaborateurs et partenaires, nous construisons un futur plus connecté, plus durable
                et plus ambitieux.
              </p>
              <p className="text-gray-700 font-semibold">GRITEL, activement connecté à demain.</p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Notre Histoire</h2>
          <p className="text-gray-700 mb-8">
            Depuis sa création le 10 octobre 2008, GRITEL n'a cessé d'évoluer pour devenir un acteur clé dans le domaine
            des installations électriques et télécommunications.
          </p>
          <Timeline />
        </section>

        {/* Organization Chart Link */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Notre Structure</h2>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-6">
              Découvrez notre structure organisationnelle et l'équipe qui fait de GRITEL un acteur de référence dans le
              domaine des installations électriques et télécommunications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/organigramme">Voir l'organigramme</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/equipe">Découvrir notre équipe</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Values */}
        <ValuesSection fullWidth />
      </div>
    </div>
  )
}

export default AboutPage
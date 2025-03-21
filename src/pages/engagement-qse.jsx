import { CheckCircle, Award, Shield, Leaf } from 'lucide-react'

function QSEPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Notre Engagement QSE</h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-gray-700 mb-6">
            GRITEL est aujourd'hui l'un des acteurs de référence dans le secteur des installations électriques et de
            télécommunications au Maroc. Notre société a toujours été à l'avant-garde, élargissant continuellement ses
            activités et lançant des solutions innovantes pour répondre aux évolutions du marché marocain.
          </p>
          <p className="text-gray-700">
            Dans le cadre de ses orientations stratégiques, GRITEL a décidé de mettre en place un système de management
            intégré SMI, qui s'appuie essentiellement sur les normes ISO 9001.2015, ISO 14001.2015 et ISO 45001.2018. Ce
            système couvre l'ensemble des structures de l'entreprise et constitue le socle d'une démarche globale visant
            l'amélioration continue, en adéquation avec notre stratégie.
          </p>
        </div>

        {/* QSE Policy Document */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Politique Qualité, Santé & Sécurité et Environnement
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative w-full h-auto mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-06%20at%2002.10.50-dhiKfVX7rsQefMTwUk35s82jeCw4Tw.jpeg"
                alt="Politique QSE GRITEL"
                className="mx-auto rounded-lg w-full"
              />
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Nos objectifs principaux</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Assurer la pérennité et l'indépendance de notre entreprise grâce à une veille continue des dernières
                    évolutions, contribuant ainsi à préserver notre réactivité et la satisfaction des parties
                    intéressées.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Promouvoir le développement des compétences de nos collaborateurs par une gestion rationnelle ce qui
                    favorise l'amélioration de la productivité et de la prise d'initiative.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Veiller au respect de la réglementation en matière de l'environnement et de la santé et sécurité au
                    travail et veiller aux évolutions règlementaires.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Renforcer en permanence l'adoption d'une démarche préventive et promouvoir une gestion responsable
                    de l'environnement et de la sécurité au travail quotidien de nos collaborateurs.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Promouvoir la prévention et la conservation des ressources naturelles ainsi que la réduction de
                    l'impact de nos activités sur l'environnement.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    S'inscrire dans une démarche d'amélioration continue en matière de QSE.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Nos Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Award className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">ISO 9001:2015</h3>
              </div>
              <p className="text-gray-700">Système de management de la qualité</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Leaf className="h-10 w-10 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">ISO 14001:2015</h3>
              </div>
              <p className="text-gray-700">Système de management environnemental</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">ISO 45001:2018</h3>
              </div>
              <p className="text-gray-700">Système de management de la santé et de la sécurité au travail</p>
            </div>
          </div>
        </div>

        {/* Engagements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Nos Engagements</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">En Qualité</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Garantir la qualité des services livrés</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Améliorer en continu l'efficience et l'efficacité de notre système de management
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Placer les clients et les parties intéressées au cœur de nos priorités et améliorer en continue leur
                    satisfaction
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">En Environnement</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Limiter les pollutions de nos activités par des procédures et une surveillance optimisée
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Encourager nos parties intéressées à mettre en œuvre les bonnes pratiques environnementales
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">En Sécurité</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Viser le Zéro accident</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Veiller à la consultation et à la participation du travailleur</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Equiper et aménager les locaux et les chantiers pour fournir un environnement adéquat
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Assurer en continu la protection, la sensibilisation et de bonnes conditions de travail pour les
                    collaborateurs
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            La force de notre société réside dans l'engagement de nos collaborateurs à adopter une démarche évolutive
            pour satisfaire nos engagements et atteindre nos différents objectifs.
          </p>
          <p className="text-gray-700 mb-4">
            Afin d'assurer le fonctionnement efficace de notre système de management intégré QSE, nous nous engageons à
            mettre à disposition l'ensemble des moyens nécessaires afin d'assurer une dynamique d'amélioration continue.
          </p>
          <div className="flex justify-end mt-6">
            <div className="text-right">
              <p className="text-gray-700">Date : 9 juillet, 2024</p>
              <p className="text-gray-700 font-semibold mt-4">Mohamed GRIOU</p>
              <p className="text-gray-700">Directeur général GRITEL</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
              alt="Certification ISO"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
              alt="Équipe GRITEL avec équipements de sécurité"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QSEPage
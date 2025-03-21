function PrivacyPolicyPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Politique de Confidentialité</h1>
  
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">Dernière mise à jour : 9 juillet 2024</p>
            <p className="text-gray-700 mb-4">
              GRITEL s'engage à protéger la vie privée des utilisateurs de son site web. Cette politique de
              confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations
              lorsque vous visitez notre site web.
            </p>
          </div>
  
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Collecte d'informations</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Nous pouvons collecter les types d'informations suivants lorsque vous visitez notre site web :
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Informations personnelles</strong> : Nom, adresse e-mail, numéro de téléphone et autres
                    informations similaires que vous nous fournissez volontairement lorsque vous remplissez un formulaire
                    de contact.
                  </li>
                  <li>
                    <strong>Informations de navigation</strong> : Adresse IP, type de navigateur, fournisseur d'accès
                    Internet, pages de référence/sortie, système d'exploitation, horodatage et données de parcours de
                    navigation.
                  </li>
                  <li>
                    <strong>Cookies</strong> : Notre site peut utiliser des cookies pour améliorer l'expérience
                    utilisateur. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer
                    quand un cookie est envoyé.
                  </li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Utilisation des informations</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">Les informations que nous collectons peuvent être utilisées pour :</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Améliorer notre site web</li>
                  <li>Améliorer notre service client et vos besoins de support</li>
                  <li>Vous contacter par e-mail</li>
                  <li>Administrer un concours, une promotion, une enquête ou une autre fonctionnalité du site</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Protection des informations</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre une variété de mesures de sécurité pour maintenir la sécurité de vos informations
                  personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations
                  sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
                </p>
                <p className="text-gray-700">
                  Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la facturation ou le
                  service client) ont accès aux informations personnelles identifiables. Les ordinateurs/serveurs utilisés
                  pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Divulgation à des tiers</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Nous ne vendons, n'échangeons ni ne transférons de quelque autre manière que ce soit vos informations
                  personnelles identifiables à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à
                  exploiter notre site web ou à mener nos activités, tant que ces parties acceptent de garder ces
                  informations confidentielles.
                </p>
                <p className="text-gray-700">
                  Nous pouvons également divulguer vos informations lorsque nous estimons que leur divulgation est
                  appropriée pour se conformer à la loi, appliquer les politiques de notre site ou protéger nos droits,
                  notre propriété ou notre sécurité ou ceux d'autrui.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Consentement</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  En utilisant notre site, vous consentez à notre politique de confidentialité.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                6. Modifications de la politique de confidentialité
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  Si nous décidons de modifier notre politique de confidentialité, nous publierons ces modifications sur
                  cette page. Cette politique a été modifiée pour la dernière fois à la date indiquée au début de ce
                  document.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Nous contacter</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter en
                  utilisant les informations ci-dessous :
                </p>
                <div className="mt-4">
                  <p className="text-gray-700">
                    <strong>GRITEL</strong>
                  </p>
                  <p className="text-gray-700">Siège social - Aïn Sebaâ, Casablanca, Maroc</p>
                  <p className="text-gray-700">Email : contact@gritel.ma</p>
                  <p className="text-gray-700">Téléphone : +212 5XX XX XX XX</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  export default PrivacyPolicyPage
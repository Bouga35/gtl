import Hero from "../components/hero"
import ServicesSection from "../components/services-section"
import AboutPreview from "../components/about-preview"
import QSEPreview from "../components/qse-preview"
import ProjectCatalog from "../components/project-catalog"
import ClientShowcase from "../components/client-showcase"
import ContactCTA from "../components/contact-cta"

function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <ProjectCatalog />
      <AboutPreview />
      <QSEPreview />
      <ClientShowcase />
      <ContactCTA />
    </div>
  )
}

export default HomePage
import { Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ServicesPage from "./pages/services"
import ProjectsPage from "./pages/projets"
import InstallationsPage from "./pages/installations"
import QSEPage from "./pages/engagement-qse"
import TeamPage from "./pages/equipe"
import OrganizationChartPage from "./pages/organigramme"
import ContactPage from "./pages/contact"
import PrivacyPolicyPage from "./pages/privacy-policy"
import PrivacyPopup from "./components/privacy-popup"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/installations" element={<InstallationsPage />} />
          <Route path="/engagement-qse" element={<QSEPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/organigramme" element={<OrganizationChartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <PrivacyPopup />
    </div>
  )
}

export default App
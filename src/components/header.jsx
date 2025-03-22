import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import { Button } from "./ui/button"
import  image  from "../assets/image.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-24 h-10">
              <img
                src={image}
                alt="GRITEL Logo"
                className="object-contain w-full h-full"
                
              />
            </div>
            <span className="text-2xl font-bold text-slate-800"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/a-propos">À Propos</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/installations">Installations</NavLink>
            <NavLink to="/engagement-qse">Engagement QSE</NavLink>
            <NavLink to="/projets">Projets</NavLink>
            <NavLink to="/equipe">Équipe</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Contact Button */}
          <Button asChild className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/contact">Demander un devis</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-slate-800" /> : <Menu className="h-6 w-6 text-slate-800" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>
              Accueil
            </MobileNavLink>
            <MobileNavLink to="/a-propos" onClick={toggleMenu}>
              À Propos
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/installations" onClick={toggleMenu}>
              Installations
            </MobileNavLink>
            <MobileNavLink to="/engagement-qse" onClick={toggleMenu}>
              Engagement QSE
            </MobileNavLink>
            <MobileNavLink to="/projets" onClick={toggleMenu}>
              Projets
            </MobileNavLink>
            <MobileNavLink to="/equipe" onClick={toggleMenu}>
              Équipe
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-slate-700 hover:text-blue-600 font-medium transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link to={to} className="text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}

export default Header
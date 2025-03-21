import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronRight, ChevronLeft } from 'lucide-react'

// Project categories
const categories = [
  { id: "all", name: "Tous les projets" },
  { id: "electrical", name: "Installations électriques" },
  { id: "telecom", name: "Réseaux télécoms" },
  { id: "industrial", name: "Projets industriels" },
  { id: "maintenance", name: "Maintenance" },
]

// Project data
const projects = [
  {
    id: 1,
    title: "Installation de poteaux électriques - Zone industrielle",
    category: "electrical",
    description:
      "Installation de 45 poteaux électriques haute tension pour alimenter une nouvelle zone industrielle à Casablanca.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "OCP",
    year: "2022",
  },
  {
    id: 2,
    title: "Réseau fibre optique - Campus universitaire",
    category: "telecom",
    description:
      "Déploiement d'un réseau de fibre optique couvrant l'ensemble du campus universitaire, permettant une connexion haut débit pour plus de 5000 utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Université Mohammed VI",
    year: "2021",
  },
  {
    id: 3,
    title: "Maintenance préventive - Réseau électrique",
    category: "maintenance",
    description:
      "Programme de maintenance préventive pour le réseau électrique d'un complexe industriel, incluant l'inspection et le remplacement des composants défectueux.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Maroc Telecom",
    year: "2023",
  },
  {
    id: 4,
    title: "Installation d'antennes 5G",
    category: "telecom",
    description:
      "Installation et configuration de 12 antennes 5G pour améliorer la couverture réseau dans la région de Rabat.",
    image:
      "https://images.unsplash.com/photo-1539020140153-e8c237293e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "INWI",
    year: "2022",
  },
  {
    id: 5,
    title: "Électrification usine de production",
    category: "industrial",
    description:
      "Installation complète du système électrique pour une nouvelle usine de production, incluant transformateurs, tableaux électriques et systèmes de secours.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Groupe OCP",
    year: "2020",
  },
  {
    id: 6,
    title: "Réseau de distribution électrique - Quartier résidentiel",
    category: "electrical",
    description:
      "Conception et installation du réseau de distribution électrique pour un nouveau quartier résidentiel de 200 logements.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Municipalité de Casablanca",
    year: "2021",
  },
  {
    id: 7,
    title: "Modernisation réseau télécom - Centre d'affaires",
    category: "telecom",
    description:
      "Modernisation complète de l'infrastructure télécom d'un centre d'affaires, incluant câblage structuré et équipements réseau de dernière génération.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Casablanca Finance City",
    year: "2022",
  },
  {
    id: 8,
    title: "Maintenance corrective - Réseau fibre optique",
    category: "maintenance",
    description:
      "Intervention d'urgence et réparation d'un réseau de fibre optique endommagé suite à des travaux de voirie.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    client: "Orange Maroc",
    year: "2023",
  },
]

function ProjectCatalog() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentProject, setCurrentProject] = useState(0)

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  // Navigation functions
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Catalogue de Projets
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez nos réalisations en installations électriques et télécommunications à travers le Maroc.
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentProject(0)
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Project showcase */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          {filteredProjects.length > 0 ? (
            <>
              <div className="relative h-[400px] md:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredProjects[currentProject].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={filteredProjects[currentProject].image || "/placeholder.svg"}
                      alt={filteredProjects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                  onClick={prevProject}
                  aria-label="Projet précédent"
                >
                  <ChevronLeft className="h-6 w-6 text-slate-800" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                  onClick={nextProject}
                  aria-label="Projet suivant"
                >
                  <ChevronRight className="h-6 w-6 text-slate-800" />
                </button>

                {/* Project counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentProject + 1} / {filteredProjects.length}
                </div>
              </div>

              {/* Project details */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredProjects[currentProject].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-800">{filteredProjects[currentProject].title}</h3>
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-slate-500">
                          <span className="font-medium text-blue-600">Client:</span>{" "}
                          {filteredProjects[currentProject].client}
                        </div>
                        <div className="text-sm text-slate-500">
                          <span className="font-medium text-blue-600">Année:</span>{" "}
                          {filteredProjects[currentProject].year}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600">{filteredProjects[currentProject].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-slate-500">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>

        {/* Project thumbnails */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                currentProject === index ? "ring-2 ring-blue-600 ring-offset-2" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentProject(index)}
            >
              <div className="relative h-20 w-full">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCatalog
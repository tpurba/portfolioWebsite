"use client"

import { useState } from "react"
import "./App.css"
import pantryAI from "./assets/pantryAI.jpg"
import orc from "./assets/orc.jpg"
import codeReader from "./assets/CodeReaderTest.jpg"
import familySearch from "./assets/familySearch.jpg"
import { Github, Linkedin, Menu, X } from "lucide-react"
import ProjectDetail from "./components/ProjectDetail";
import SkillsDetail from "./components/SkillsDetail";
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';
import MobileMenu from "./components/MobileMenu";
function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [currentView, setCurrentView] = useState<"projects" | "skills">("projects")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const imageMap = {
    orc,
    pantryAI,
    codeReader,
    familySearch,
  };
  // Use imported JSON data
  const projects = projectsData;
  const skills = skillsData;

  const currentProject = projects[activeProject]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Wave SVG - Left Side Decoration */}
      <svg
        className="fixed left-0 top-0 h-full w-1/2 -z-10 hidden lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
          </linearGradient>
        </defs>
        <path d="M0,0 C30,20 70,0 100,30 L100,70 C70,100 30,80 0,100 Z" fill="url(#waveGradient)" />
      </svg>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent">
            Takun Purba
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              currentView={currentView}
              setCurrentView={setCurrentView}
              projects={projects}
              skills={skills}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
      )}

      <div className="flex min-h-screen">
        {/* Left Panel - Desktop Only */}
        <div className="hidden lg:flex lg:w-1/2 lg:fixed lg:left-0 lg:top-0 lg:h-screen flex-col justify-center items-start text-left px-16 py-0 relative z-10">
          <div className="max-w-lg flex flex-col h-full overflow-hidden">
            <div className="mb-8">
              <h1 className="text-6xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
                Takun Purba
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-start mb-8">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-400/30">
                Fullstack Developer
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-200 rounded-full text-sm border border-pink-400/30">
                Software Engineer
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30">
                Front End Developer
              </span>
            </div>

            {/* Contact Links */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/takun-purba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-200 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/tpurba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-500/20 text-slate-200 rounded-lg text-sm border border-slate-400/30 backdrop-blur-sm hover:bg-slate-500/30 transition-all duration-200 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>

            {/* View Toggle */}
            <div className="mb-8">
              <div className="flex gap-2 p-1 bg-slate-800/50 rounded-lg">
                <button
                  onClick={() => setCurrentView("projects")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentView === "projects" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setCurrentView("skills")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentView === "skills" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Skills
                </button>
              </div>
            </div>

            {/* Navigation Content */}
            {currentView === "projects" ? (
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">Featured Projects</p>
                <div className="space-y-2 max-h-75 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`block w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        activeProject === index
                          ? "bg-white/10 border border-white/20 text-white shadow-lg"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                        {project.title}
                      </div>
                      <div className="text-xs opacity-75">{project.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">Technical Skills</p>
                <div className="space-y-4 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                  {Object.entries(skills).map(([category, data]) => (
                    <div key={category} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h4 className="font-semibold text-white text-sm mb-2">{category}</h4>
                      <div className="space-y-2 text-xs">
                        {category === "Programming Languages & IDEs" &&
                          "proficient" in data &&
                          Array.isArray(data.proficient) && (
                            <>
                              <div>
                                <span className="text-green-300 font-medium">Proficient: </span>
                                <span className="text-slate-300">{data.proficient.join(", ")}</span>
                              </div>
                              <div>
                                <span className="text-yellow-300 font-medium">Moderate: </span>
                                <span className="text-slate-300">{data.moderate.join(", ")}</span>
                              </div>
                              <div>
                                <span className="text-blue-300 font-medium">IDEs: </span>
                                <span className="text-slate-300">{data.ides.join(", ")}</span>
                              </div>
                            </>
                          )}
                        {category === "Database Management" &&
                          "relational" in data &&
                          Array.isArray(data.relational) && (
                            <>
                              <div>
                                <span className="text-purple-300 font-medium">Relational: </span>
                                <span className="text-slate-300">{data.relational.join(", ")}</span>
                              </div>
                              <div>
                                <span className="text-cyan-300 font-medium">NoSQL: </span>
                                <span className="text-slate-300">{data.nosql.join(", ")}</span>
                              </div>
                              <div>
                                <span className="text-orange-300 font-medium">Big Data: </span>
                                <span className="text-slate-300">{data.bigData.join(", ")}</span>
                              </div>
                              <div>
                                <span className="text-pink-300 font-medium">Tools: </span>
                                <span className="text-slate-300">{data.tools.join(", ")}</span>
                              </div>
                            </>
                          )}
                        {(category === "Testing" ||
                          category === "Frameworks & Tools" ||
                          category === "Web Technologies") && (
                          <div>
                            <span className="text-slate-300">
                              {Array.isArray((data as any).areas)
                                ? (data as { areas: string[] }).areas.join(", ")
                                : Array.isArray((data as any).items)
                                  ? (data as { items: string[] }).items.join(", ")
                                  : ""}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Scrollable Content */}
        {currentView === "projects" ? (
          <div className="w-full lg:w-3/5 lg:ml-auto min-h-screen bg-white/95 backdrop-blur-sm pt-20 lg:pt-0">
            <ProjectDetail
              project={currentProject}
              imageMap={imageMap}
              onPrev={prevProject}
              onNext={nextProject}
            />
          </div>
        ) : (
          <div className="w-full lg:w-3/5 lg:ml-auto min-h-screen bg-white/80 backdrop-blur-sm pt-20 lg:pt-0">
            <SkillsDetail skills={skills} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App

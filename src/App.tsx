"use client"

import { useState } from "react"
import "./App.css"
import pantryAI from "./assets/pantryAI.jpg"
import orc from "./assets/orc.jpg"
import codeReader from "./assets/CodeReaderTest.jpg"
import familySearch from "./assets/familySearch.jpg"
import { ExternalLink, Github, Linkedin, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';

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
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm pt-16">
          <div className="p-6 space-y-6 max-h-screen overflow-y-auto">
            {/* Mobile Contact Links */}
            <div className="space-y-4">
              <p className="text-slate-400 text-sm uppercase tracking-wider">Connect with me</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/takun-purba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-500/20 text-blue-200 rounded-lg border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/tpurba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-500/20 text-slate-200 rounded-lg border border-slate-400/30 backdrop-blur-sm hover:bg-slate-500/30 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Mobile View Toggle */}
            <div>
              <div className="flex gap-2 p-1 bg-slate-800/50 rounded-lg">
                <button
                  onClick={() => {
                    setCurrentView("projects")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentView === "projects" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    setCurrentView("skills")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentView === "skills" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Skills
                </button>
              </div>
            </div>

            {/* Mobile Project Navigation */}
            {currentView === "projects" ? (
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">Featured Projects</p>
                <div className="space-y-2 max-h-65">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        setActiveProject(index)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`block w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeProject === index
                          ? "bg-white/10 border border-white/20 text-white shadow-lg"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{project.title}</div>
                      <div className="text-xs opacity-75">{project.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            ): (
              // skills left mobile view
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
            <div className="p-4 sm:p-6 lg:p-12">
              {/* Project Header */}
              <header className="mb-8 lg:mb-12">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                      {currentProject.title}
                    </h2>
                    <div className={`w-16 lg:w-20 h-1 bg-gradient-to-r ${currentProject.color} mb-4 lg:mb-6`} />
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
                    <button
                      onClick={prevProject}
                      className="p-2 lg:p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-2 lg:p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
                  <div>
                    <p className="text-lg lg:text-xl font-semibold text-slate-700 mb-2">{currentProject.subtitle}</p>
                    <p className="text-slate-600 mb-1">{currentProject.period}</p>
                    {currentProject.location && <p className="text-slate-500 text-sm">{currentProject.location}</p>}
                  </div>
                  <div className="flex justify-start lg:justify-end">
                    <a
                      href={currentProject.livePage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors group w-full sm:w-auto justify-center"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                  </div>
                </div>
              </header>

              {/* Project Content */}
              <div className="space-y-8 lg:space-y-12">
                {/* Overview Section */}
                <section>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Project Overview</h3>
                  <div className="bg-slate-50 rounded-xl lg:rounded-2xl p-4 lg:p-8 mb-6 lg:mb-8">
                    <p className="text-slate-700 leading-relaxed text-base lg:text-lg">{currentProject.overview}</p>
                  </div>
                  {/* Media Content */}
                  {currentProject.video && (
                    <div className="aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                      <iframe
                        src={currentProject.video}
                        title="Project video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  {currentProject.image && (
                    <img
                      src={imageMap[currentProject.image] || "/placeholder.svg"}
                      alt="Project screenshot"
                      className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg"
                    />
                  )}
                  {currentProject.horzimage && (
                    <img
                      src={imageMap[currentProject.horzimage] || "/placeholder.svg"}
                      alt="Project screenshot"
                      className=" h-auto rounded-xl lg:rounded-2xl shadow-lg"
                    />
                  )}
                </section>

                {/* Key Features */}
                <section>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Key Features</h3>
                  <div className="grid gap-3 lg:gap-4">
                    {currentProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white rounded-lg lg:rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentProject.color} rounded-full mt-2 flex-shrink-0`}
                        />
                        <span className="text-slate-700 leading-relaxed text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technology Stack */}
                <section>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {currentProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 lg:px-4 py-2 bg-white border border-slate-200 text-slate-800 rounded-lg text-xs lg:text-sm font-medium hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Project Impact */}
                {currentProject.impact && (
                  <section>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Project Impact</h3>
                    <div
                      className={`bg-gradient-to-r ${currentProject.color} p-6 lg:p-8 rounded-xl lg:rounded-2xl text-white shadow-xl lg:shadow-2xl`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
                        {currentProject.impact.map((stat, index) => (
                          <div key={index} className="space-y-2">
                            <div className="text-2xl lg:text-4xl font-bold">{stat.value}</div>
                            <div className="text-white/90 font-medium text-sm lg:text-base">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Reflections and Future Plans */}
                <section className="pb-8 lg:pb-12">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">
                    Reflections & Future Plans
                  </h3>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8 rounded-xl lg:rounded-2xl space-y-6">
                    {currentProject.futurePlans && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Future Plans</h4>
                        <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
                          {currentProject.futurePlans}
                        </p>
                      </div>
                    )}
                    {currentProject.reflections && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Personal Reflections</h4>
                        <p className="text-slate-700 leading-relaxed italic font-medium text-sm lg:text-base">
                          "{currentProject.reflections}"
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : (
          // Right side Skills view
          <div className="w-full lg:w-3/5 lg:ml-auto min-h-screen bg-white/80 backdrop-blur-sm pt-20 lg:pt-0">
            <div className="p-4 sm:p-6 lg:p-12">
              <header className="mb-8 lg:mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">Technical Skills</h2>
                <div className="w-16 lg:w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mb-4 lg:mb-6" />
                <p className="text-lg lg:text-xl text-slate-600">
                  A comprehensive overview of my technical expertise and proficiency levels
                </p>
              </header>
              <div className="space-y-6 lg:space-y-8">
                {Object.entries(skills).map(([category, data]) => (
                  <section
                    key={category}
                    className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm"
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">{category}</h3>
                    {category === "Programming Languages & IDEs" && (
                      <div className="space-y-4 lg:space-y-6">
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-green-700 mb-3">Proficient</h4>
                          <div className="flex flex-wrap gap-2">
                            {"proficient" in data &&
                              Array.isArray(data.proficient) &&
                              data.proficient.map((skill: string) => (
                                <span
                                  key={skill}
                                  className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-yellow-700 mb-3">Moderate</h4>
                          <div className="flex flex-wrap gap-2">
                            {"moderate" in data &&
                              Array.isArray(data.moderate) &&
                              data.moderate.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-blue-700 mb-3">IDEs</h4>
                          <div className="flex flex-wrap gap-2">
                            {"ides" in data &&
                              Array.isArray(data.ides) &&
                              data.ides.map((ide) => (
                                <span
                                  key={ide}
                                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {ide}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {category === "Database Management" && (
                      <div className="space-y-4 lg:space-y-6">
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-purple-700 mb-3">
                            Relational Databases
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {"relational" in data &&
                              Array.isArray(data.relational) &&
                              data.relational.map((db) => (
                                <span
                                  key={db}
                                  className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {db}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-cyan-700 mb-3">NoSQL Databases</h4>
                          <div className="flex flex-wrap gap-2">
                            {"nosql" in data &&
                              Array.isArray(data.nosql) &&
                              data.nosql.map((db) => (
                                <span
                                  key={db}
                                  className="px-3 py-2 bg-cyan-100 text-cyan-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {db}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-orange-700 mb-3">
                            Big Data & Distributed Systems
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {"bigData" in data &&
                              Array.isArray(data.bigData) &&
                              data.bigData.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-pink-700 mb-3">Database Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {"tools" in data &&
                              Array.isArray(data.tools) &&
                              data.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-xs lg:text-sm font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {(category === "Testing" ||
                      category === "Frameworks & Tools" ||
                      category === "Web Technologies") && (
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray((data as any).areas) &&
                          (data as { areas: string[] }).areas.map((item: string) => (
                            <span
                              key={item}
                              className="px-3 py-2 bg-slate-100 text-slate-800 rounded-lg text-xs lg:text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        {Array.isArray((data as any).items) &&
                          (data as { items: string[] }).items.map((item: string) => (
                            <span
                              key={item}
                              className="px-3 py-2 bg-slate-100 text-slate-800 rounded-lg text-xs lg:text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

import React from "react";
import { Github, Linkedin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: "projects" | "skills";
  setCurrentView: (view: "projects" | "skills") => void;
  projects: any[];
  skills: Record<string, any>;
  activeProject: number;
  setActiveProject: (index: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentView,
  setCurrentView,
  projects,
  skills,
  activeProject,
  setActiveProject,
}) => {
  if (!isOpen) return null;
  return (
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
                setCurrentView("projects");
                onClose();
              }}
              className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                currentView === "projects" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                setCurrentView("skills");
                onClose();
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
            <div className="space-y-2 max-h-60">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProject(index);
                    onClose();
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
        ) : (
          // skills left mobile view
          <div>
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">Technical Skills</p>
            <div className="space-y-4 max-h-60">
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
  );
};

export default MobileMenu;

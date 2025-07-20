import React from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImpact {
  value: string;
  label: string;
}

interface Project {
  id: number | string;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  livePage: string;
  color: string;
  overview: string;
  video?: string;
  image?: string;
  horzimage?: string;
  features: string[];
  techStack: string[];
  impact?: ProjectImpact[];
  futurePlans?: string;
  reflections?: string;
}

interface ImageMap {
  [key: string]: string;
}

interface ProjectDetailProps {
  project: Project;
  imageMap: ImageMap;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, imageMap, onPrev, onNext }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-12">
      {/* Project Header */}
      <header className="mb-8 lg:mb-12">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {project.title}
            </h2>
            <div className={`w-16 lg:w-20 h-1 bg-gradient-to-r ${project.color} mb-4 lg:mb-6`} />
          </div>
          <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={onPrev}
              className="p-2 lg:p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
            </button>
            <button
              onClick={onNext}
              className="p-2 lg:p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
          <div>
            <p className="text-lg lg:text-xl font-semibold text-slate-700 mb-2">{project.subtitle}</p>
            <p className="text-slate-600 mb-1">{project.period}</p>
            {project.location && <p className="text-slate-500 text-sm">{project.location}</p>}
          </div>
          <div className="flex justify-start lg:justify-end">
            <a
              href={project.livePage}
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
            <p className="text-slate-700 leading-relaxed text-base lg:text-lg">{project.overview}</p>
          </div>
          {/* Media Content */}
          {project.video && (
            <div className="aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <iframe
                src={project.video}
                title="Project video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
          {project.image && (
            <img
              src={imageMap[project.image as keyof typeof imageMap] || "/placeholder.svg"}
              alt="Project screenshot"
              className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg"
            />
          )}
          {project.horzimage && (
            <img
              src={imageMap[project.horzimage as keyof typeof imageMap] || "/placeholder.svg"}
              alt="Project screenshot"
              className=" h-auto rounded-xl lg:rounded-2xl shadow-lg"
            />
          )}
        </section>

        {/* Key Features */}
        <section>
          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Key Features</h3>
          <div className="grid gap-3 lg:gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white rounded-lg lg:rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}
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
            {project.techStack.map((tech) => (
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
        {project.impact && (
          <section>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6">Project Impact</h3>
            <div
              className={`bg-gradient-to-r ${project.color} p-6 lg:p-8 rounded-xl lg:rounded-2xl text-white shadow-xl lg:shadow-2xl`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
                {project.impact.map((stat, index) => (
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
            {project.futurePlans && (
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Future Plans</h4>
                <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
                  {project.futurePlans}
                </p>
              </div>
            )}
            {project.reflections && (
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Personal Reflections</h4>
                <p className="text-slate-700 leading-relaxed italic font-medium text-sm lg:text-base">
                  "{project.reflections}"
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;

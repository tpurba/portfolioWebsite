import React from "react";

interface SkillsDetailProps {
  skills: Record<string, any>;
}

const SkillsDetail: React.FC<SkillsDetailProps> = ({ skills }) => {
  return (
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
                      data.moderate.map((skill: string) => (
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
                      data.ides.map((ide: string) => (
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
                  <h4 className="text-base lg:text-lg font-semibold text-purple-700 mb-3">Relational Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {"relational" in data &&
                      Array.isArray(data.relational) &&
                      data.relational.map((db: string) => (
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
                      data.nosql.map((db: string) => (
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
                  <h4 className="text-base lg:text-lg font-semibold text-orange-700 mb-3">Big Data & Distributed Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {"bigData" in data &&
                      Array.isArray(data.bigData) &&
                      data.bigData.map((tool: string) => (
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
                      data.tools.map((tool: string) => (
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
  );
};

export default SkillsDetail;

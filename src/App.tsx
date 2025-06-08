"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 0,
      title: "Intermountain Health Clinic",
      subtitle: "Healthcare Innovation Project",
      period: "2023 - 2024",
      overview:
        "A comprehensive healthcare management system designed to streamline patient care and improve operational efficiency at Intermountain Health Clinic. This project focuses on creating intuitive user experiences for both patients and healthcare providers.",
      features: [
        "Real-time appointment scheduling and management",
        "Secure patient communication portal",
        "Electronic health records integration",
        "Automated prescription management",
        "Telehealth consultation platform",
        "Analytics and reporting dashboard",
      ],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
      impact: [
        { value: "40%", label: "Reduced Wait Times" },
        { value: "95%", label: "Patient Satisfaction" },
        { value: "60%", label: "Efficiency Increase" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 1,
      title: "VAST Storage Analysis Tool",
      subtitle: "Supercomputer Web Development",
      period: "January 2024 - Current",
      location: "Office of Research and Computing, Provo, UT",
      overview:
        "Developed a comprehensive web platform for the university's supercomputer infrastructure, serving 6,000+ users with live storage data management, user authentication, and administrative tools.",
      features: [
        "VAST API providing live storage data to 6,000+ users through web interface",
        "Migrated data service from Java to VAST for improved user storage management",
        "Custom autofill algorithm improving username search speed by 50%",
        "Secure user authentication with NIST-compliant password management",
        "One-time password reset links for 200+ users",
        "Grant tracking algorithm to demonstrate service value to professors",
        "Dynamic protected data form with personalized training system",
        "User coordinator page debugging and upgrades",
      ],
      techStack: ["JavaScript", "Java", "VAST", "Node.js", "Database Systems", "Authentication APIs"],
      impact: [
        { value: "6,000+", label: "Active Users" },
        { value: "50%", label: "Search Speed Improvement" },
        { value: "200+", label: "Secure User Accounts" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const currentProject = projects[activeProject]

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

      <div className="flex min-h-screen">
        {/* Left Panel - Fixed/Sticky */}
        <div className="lg:w-1/2 w-full lg:fixed lg:left-0 lg:top-0 lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-16 py-12 lg:py-0 relative z-10">
          <div className="max-w-lg">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
                Takun Purba
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto lg:mx-0 mb-8"></div>
            </div>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              My dream is to be able to create something amazing for the people who believe in me.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-400/30">
                Fullstack Developer
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-200 rounded-full text-sm border border-pink-400/30">
                Web Developer
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30">
                System Designer
              </span>
            </div>

            {/* Project Navigation */}
            <div className="space-y-3 mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wider">Featured Projects</p>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`block w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeProject === index
                      ? "bg-white/10 border border-white/20 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="font-semibold text-sm">{project.title}</div>
                  <div className="text-xs opacity-75">{project.period}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Scrollable Content */}
        <div className="lg:w-1/2 lg:ml-auto w-full min-h-screen bg-white/95 backdrop-blur-sm">
          <div className="p-8 lg:p-16">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 text-center lg:text-right flex-1">
                  {currentProject.title}
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 ml-auto mb-6"></div>
              <div className="text-right">
                <p className="text-xl text-gray-600">{currentProject.subtitle}</p>
                <p className="text-gray-500">{currentProject.period}</p>
                {currentProject.location && <p className="text-gray-500">{currentProject.location}</p>}
              </div>
            </header>

            {/* Project Content */}
            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{currentProject.overview}</p>

                {activeProject === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Mobile Friendly Web app</h4>
                      <p className="text-gray-600 text-sm">
                        Designed with young cancer patients in mind, ensuring easy navigation and accessibility on
                        mobile devices. At most 2 clicks to access any book or resource.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Admin Management</h4>
                      <p className="text-gray-600 text-sm">
                        Admins can easily manage the library's book collection, including adding new books, automating
                        the audit process, and automating the checkout and checkin process.
                      </p>
                    </div>
                  </div>
                )}
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Key {activeProject === 0 ? "Features" : "Achievements"}
                </h3>
                <div className="space-y-4">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {currentProject.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Impact</h3>
                <div className={`bg-gradient-to-r ${currentProject.color} p-8 rounded-2xl text-white`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {currentProject.impact.map((stat, index) => (
                      <div key={index}>
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {activeProject === 0 && (
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Development Process</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Discovery</h4>
                      <p className="text-gray-600">
                        Worked closely with healthcare professionals to understand the needs and challenges, ensuring
                        the app addresses real-world issues. Worked closely together as a team of 4 developers to finish
                        this project within 4 months.
                      </p>
                    </div>
                    <div className="border-l-4 border-pink-500 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Design & Prototyping</h4>
                      <p className="text-gray-600">
                        Received a mock of the app from the healthcare professionals, which was then transformed into a
                        functional prototype that is approved every week. The design focused on simplicity and ease of
                        use for young patients.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Development & Testing</h4>
                      <p className="text-gray-600">
                        Developed the app using React and Tailwind CSS, ensuring a responsive and accessible design.
                        Conducted thorough testing with real users to gather feedback and make necessary adjustments.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {activeProject === 1 && (
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                      <p className="text-gray-600 text-sm">
                        Improved username search speed by 50% through custom autofill algorithms, enhancing admin
                        efficiency.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Security Implementation</h4>
                      <p className="text-gray-600 text-sm">
                        Built NIST-compliant authentication system with secure password management for 200+ users.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Data Migration</h4>
                      <p className="text-gray-600 text-sm">
                        Successfully migrated data service from Java to VAST, improving storage management capabilities.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Dynamic Forms</h4>
                      <p className="text-gray-600 text-sm">
                        Developed personalized training system with dynamic protected data forms for compliance.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              <section className="pb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {activeProject === 0 ? "Project Recognition" : "Ongoing Development"}
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  {activeProject === 0 ? (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        The project has been passed on to the healthcare professionals and a Computer Science Professor,
                        who will continue to maintain and enhance the app. Future plans include adding more features
                        based on user feedback, such as personalized reading recommendations and integration with other
                        healthcare resources.
                      </p>
                      <p className="text-gray-600 italic font-medium">
                        "This project represents the summary of my college experience as I was able to show the
                        qualities and talents I have nurtured throughout my time at BYU. I am excited to announce that
                        this project placed 3rd place in the capstone judging competition at BYU."
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Currently developing advanced features to further enhance the supercomputer infrastructure:
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Grant tracking algorithm to demonstrate service value to professors</li>
                        <li>• Enhanced dynamic protected data forms with improved personalization</li>
                        <li>• Advanced analytics dashboard for system administrators</li>
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

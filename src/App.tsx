"use client"
import { useState } from "react"
import "./App.css"
import pantryAI from "./assets/pantryAI.jpg"
import orc from "./assets/orc.jpg"
import codeReader from "./assets/CodeReaderTest.jpg"
import familySearch from "./assets/familySearch.jpg"
import { ExternalLink, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [currentView, setCurrentView] = useState<"projects" | "skills">("projects")

  const projects = [
    {
      id: 0,
      title: "Intermountain Health Clinic Library Web App",
      subtitle: "Front End Developer",
      location: "Intermountain Health Clinic, Provo, UT",
      livePage:"https://bibliotrace.com/login",
      video:"https://www.youtube.com/embed/5qw0Yw-X_9A",
      period: "January 2025 - April 2025",
      overview:
        "This project modernized an outdated Microsoft Access-based library system into a mobile-friendly web application designed for young cancer patients. The new system enhances accessibility with simplified navigation and larger text, allowing patients to use their own mobile devices. Additionally, the project upgraded the database and automated key processes—such as check-in/out, auditing, and data migration—reducing technical overhead for elderly volunteer administrators and improving the overall patient library experience.",
      features: [
        "Mobile friendly web app designed for young cancer patients",
        "Bigger text and simplified navigation for easy access at most 2 clicks to access any book or resource",
        "Automated book checkout and checkin process",
        "Automated audit process for book management",
        "Admin management simplified for voluenteers to manage the library's book collection",
        "Developed a search bar that returns relevant results even when users enter misspelled words or incorrect terms.",
      ],
      techStack: ["React", "Java Script", "Typescript", "Tailwind CSS", "MySQL", "AWS", "Docker"],
      impact: [
        { value: "40%", label: "Faster Search" },
        { value: "70%", label: "Automated Library Process" },
        { value: "3rd", label: "Place in Capstone Competition" },
      ],
      futurePlans: "The project has been passed on to the healthcare professionals and a Computer Science Professor, who will continue to maintain and enhance the app. Future plans include adding more features based on user feedback, such as personalized reading recommendations and integration with other healthcare resources.",
      reflections:"This project represents the summary of my college experience as I was able to show the qualities and talents I have nurtured throughout my time at BYU. I am excited to announce that this project placed 3rd place in the capstone judging competition at BYU.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 1,
      title: "Office of Research and Computing Web Platform",
      subtitle: "Full Stack Web Developer",
      period: "January 2024 - April 2025",
      location: "Office of Research and Computing, Provo, UT",
      livePage:"https://rc.byu.edu/",
      image: orc,
      overview:
        "Managed and developed new features for the Office of Research and Computing's web platform, which provides a supercomputer infrastructure to BYU researchers. This project involved migrating data services from Java to VAST, implementing secure user authentication, and developing a dynamic protected data form with a personalized training system. The platform serves over 6,000 users, enhancing their ability to manage storage and access computing resources efficiently.",
      features: [
        "VAST API providing live storage data to 6,000+ users through web interface",
        "Custom autofill algorithm improving username search speed by 50%",
        "Secure user authentication with NIST-compliant password management",
        "One-time password reset links for 200+ users",
        "Grant tracking algorithm to demonstrate service value to 60+ professors",
        "Dynamic protected data form with personalized training system to 250+ users",
      ],
      techStack: ["JavaScript", "VAST", "MySQL", "Ajax", "PHP", "HTML", "CSS"],
      impact: [
        { value: "6,000+", label: "Active Users" },
        { value: "50%", label: "Search Speed Improvement" },
        { value: "200+", label: "Secure User Accounts" },
      ],
      reflections: "This experience has helped me improve as a full stack developer. I was also able to learn to lead a team of 4 developers to finish many features to the point where there were no more tickets to work on. In additions I have grown in being able to read other peoples code and able to gain a deeper understanding in debugging front end.",
      color: "from-blue-500 to-cyan-500",
    },
     {
      id: 2,
      title: "Pantry AI Web App",
      subtitle: "Front End Developer",
      location: "Utah State University, Logan, UT",
      livePage:"https://github.com/harrydcole2/usu-hackathon-project?tab=readme-ov-file",
      image: pantryAI,
      period: "Feburary 2025",
      overview:
        "This is a project that I worked on during a hackathon at Utah State University. The goal was to create a web app that helps users manage their pantry inventory and suggests recipes based on available ingredients. The app uses AI to analyze the user's pantry items and provide personalized recipe recommendations, making meal planning easier and reducing food waste.",
      features: [
        "Web app that helps users manage their pantry inventory",
        "AI-powered recipe suggestions based on available ingredients",
        "User-friendly interface for easy navigation and management of pantry items",
        "Real-time updates on pantry inventory and recipe suggestions",
      ],
      techStack: ["React", "TypeScript", "MySQL", "Docker"],
      
      futurePlans: "This project is still in its early stages, and I plan to keep it as a proof of concept in hopes that it can be paired with the walmart app to help users manage their pantry inventory and suggest recipes based on available ingredients. I am also looking to add more features such as a shopping list and meal planning.",
      reflections:"This project was a very fun project that a I set up with a group of 3 other friends. We had a hour planning session, no coding, before going into the USU 24 hour Hackathon. All in all we were able to develop a working product that we were proud of and had a lot of fun trying out new languages and tech stacks as well as be able to show what we could do as a team.",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      title: "Bop it Smart Watch App",
      subtitle: "Tinkering with ESP32 Smart Watch Head",
      video:"https://www.youtube.com/embed/hD45-yQ770c",
      livePage:"https://github.com/tpurba/bopit-ESP32",
      period: "Janurary 2025 - April 2025",
      overview:
        "This is a project that I worked on as a hobby project. The goal was to create a smart watch app that allows users to play the classic game Bop it. The app uses the ESP32 microcontroller to connect to a smart watch and provides a fun and interactive way to play the game on the go.",
      features: [
        "Simple and fun game that can be played on a smart watch",
        "Takes in user input from the watch to control the game",
        "Very simple and easy to use interface",
      ],
      techStack: ["Arduino", "C++"],
      impact: [
        { value: "50+", label: "Users enjoyed the game" },
        { value: "124", label: "High score" },
        { value: "7+", label: "Can play the game" },
      ],
      futurePlans: "This is a project that I plan to keep as a hobby project. I am looking to add more features such as a leaderboard and multiplayer support. I am also looking to improve the user interface and make it more user-friendly.",
      reflections:"This project was a fun project that I worked on and was really fun to play. I had many friends play this game and enjoy it.",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "Trade Off the Game",
      subtitle: "Game Developer",
      video:"https://www.youtube.com/embed/1nLaHx9NoSI",
      livePage:"https://github.com/Swimnato/BYUGameJamSpring2025",
      period: "March 2025 - April 2025",
      overview:
        "This is a 3 week game jam Project that I worked on with a group of 7 people. 3 of us were developers creating a 3d top down metrovania game with a slight twist where you have to give up your keybindings/ conrtols to gain other abilities.",
      features: [
        "Simple and fun game that can be played on a smart watch",
        "Takes in user input from the watch to control the game",
        "Very simple and easy to use interface",
      ],
      techStack: ["Unreal Engine 5", "C#"],
      impact: [
        { value: "20+", label: "Users enjoyed the game" },
        { value: "5+", label: "Levels" },
        { value: "7+", label: "Can play the game" },
      ],
      futurePlans: "This project is still in its early stages, I plan to work out some of the bugs I could not get to during the hackathon.",
      reflections:"This project was a fun project that I worked on and was really fun to play. I had many friends play this game and enjoy it.",
      color: "from-green-500 to-teal-500",
    },

    {
      id: 5,
      title: "Project Code Reader Tester",
      subtitle: "Web Developer",
      image: codeReader,
      livePage:"https://github.com/tpurba/CodeReaderTester",
      period: " December 2024",
      overview:
        "This is a project that I worked on for my database class. The goal was to create a web app that allows users to test their code reading skills. The app uses a simple interface to display code snippets and provides feedback on the user's performance. The app is designed to help users improve their code reading skills and become more proficient in programming.",
      features: [
        "Simple UI that allows users to test their code reading skills",
        "Provides feedback on the user's performance",
        "Personlized feedback based on the user's performance",
        "Leverages ChatGPT to provide personalized feedback",
      ],
      techStack: ["JavaScript ", "HTML", "Python", "CSS", "MongoDB", "ChatGPT", "JSON"],
      futurePlans: "This project was a proof of concept that I worked on for my database class. I plan to keep it as a hobby project and add more languages for users to test thier reading skills in.",
      reflections:"This project was a test to see how far I could take a simple idea and leverage ChatGPT. I learned a lot about how to use ChatGPT from double shot to zero shot and how to use it to provide personalized feedback.",
      color: "from-green-500 to-teal-500",
    },

    {
      id: 6,
      title: "Tweeter Java based Android App",
      subtitle: "Android App Developer",
      video:"https://www.youtube.com/embed/aharuBnTSeE?si=mJuVUo_q2plx_kxX",
      livePage:"https://github.com/tpurba/CS340-Tweeter-app",
      period: "August 2023 - December 2023",
      overview:
        "This project was a semester long project that each student had to work on individually for CS340. The goal for this project was to teach good coding practices and software design by creating a tweeter app. This app is a MVC based Android app that supports all the basic features of a tweeter app such as posting, liking, and following users. The app is designed to be user-friendly and easy to navigate. The below video is a demo created by the TAs to show the apps features(Note: it is not my video nor exactly what my app looks like as I added a few more visuals but is very simlar).",
      features: [
        "Simple UI that allows users to post, like, and follow users",
        "AWS S3 usage for profile photos, authentication token, sign out functionality, and password hashing.",
        "Handles 10,000 posts and 10,000 follow requests with ease",
        "Provides users with real-time updates for counts and posts.",
      ],
      techStack: ["Java ", "Android Studio", "AWS"],
      reflections:"This project was a huge project that took everything for me to finish on time. I remeber working tirelessly till 2am many days in a row to figure out and finish the project. I rememeber thinking of asking for help or working together on this project to finish it but I wanted to prove to myself that I could do it on my own. It was a great chance for me to really push myself as a individual coded and gave me the confidence to be able to solve any problem on my own if needed and not rely on others.",
      color: "from-green-500 to-teal-500",
    },

    {
      id: 7,
      title: "Family Ancestry Android App",
      subtitle: "Android App Developer",
      horzimage: familySearch,
      livePage:"https://github.com/tpurba/CS240FamilyApp",
      period: "August 2021 - December 2021",
      overview:
        "This project was a three quarter semester long project that each student had to work on individually for CS240. The goal for this project was to create a working android app that mimics the basic functionalities of a family search application. The features include adding/removing people to the family history, tracing the lineage on a map, and writing stories/information on the specific person.",
      features: [
        "Simple and interactive UI that allows users to add/remove people to the family history",
        "Tracing the lineage on a map",
        "Writing stories/information on the specific person",
        "Allows users to search for people in the family history",
        "Allows users to view the family history in a tree format",
        "Settings that filter the family history by Father side, Mother side, Male Events, and Female Events",

      ],
      techStack: ["Java ", "Android Studio"],
      reflections:"This project was a very difficult project that required a lot of help from TAs. But through the help I recieved and the work that I put in I was able to complete this project.",
      color: "from-green-500 to-teal-500",
    },
  ]


  const skills = {
    "Programming Languages & IDEs": {
      proficient: ["C++", "Python", "PHP", "C", "JavaScript", "HTML", "CSS"],
      moderate: ["C#", "Java", "React"],
      ides: ["PHPStorm", "Visual Studio", "Unity", "Android Studio", "Arduino", "Godot"],
    },
    Testing: {
      areas: ["Unit testing", "Automation", "Mocking with Mockito"],
    },
    "Frameworks & Tools": {
      items: ["React", "AWS", "MySQL"],
    },
    "Web Technologies": {
      items: ["CSS/HTML", "WebSockets", "DOM Manipulation"],
    },
    "Database Management": {
      relational: ["Oracle", "MySQL", "PostgreSQL", "SQLite"],
      nosql: ["MongoDB", "Redis"],
      bigData: ["Apache Spark"],
      tools: ["MySQL Workbench", "Redis Insight"],
    },
  }

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

      <div className="flex min-h-screen">
        {/* Left Panel - Fixed/Sticky */}
        <div className="lg:w-1/2 w-full lg:fixed lg:left-0 lg:top-0 lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-16 py-12 lg:py-0 relative z-10">
          <div className="max-w-lg flex flex-col h-full overflow-hidden">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6=7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
                Takun Purba
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto lg:mx-0 "></div>
            </div>

            {/* <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              My dream is to be able to create something amazing for the people who believe in me.
            </p> */}

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
                  href="https://github.com/tpurba/tpurba.git"
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
                <div className="space-y-2 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
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
                        {category === "Programming Languages & IDEs" && "proficient" in data && Array.isArray(data.proficient) && (
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
                        {category === "Database Management" && "relational" in data && Array.isArray(data.relational) && (
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
          // ... existing project content (keep all the current project display code)
          <div className="lg:w-3/5 lg:ml-auto w-full min-h-screen bg-white/95 backdrop-blur-sm">
            <div className="p-8 lg:p-12">
              {/* Project Header */}
              <header className="mb-12">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                      {currentProject.title}
                    </h2>
                    <div className={`w-20 h-1 bg-gradient-to-r ${currentProject.color} mb-6`} />
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={prevProject}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xl font-semibold text-slate-700 mb-2">{currentProject.subtitle}</p>
                    <p className="text-slate-600 mb-1">{currentProject.period}</p>
                    {currentProject.location && <p className="text-slate-500 text-sm">{currentProject.location}</p>}
                  </div>
                  <div className="flex justify-start md:justify-end">
                    <a
                      href={currentProject.livePage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                  </div>
                </div>
              </header>

              {/* Project Content */}
              <div className="space-y-12">
                {/* Overview Section */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h3>
                  <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                    <p className="text-slate-700 leading-relaxed text-lg">{currentProject.overview}</p>
                  </div>

                  {/* Media Content */}
                  {currentProject.video && (
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        src={currentProject.video}
                        title="Project video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  {currentProject.image &&(
                    <img src={currentProject.image} alt="Description of image" className="w-full h-auto" />
                  )}
                  {currentProject.horzimage &&(
                    <img src={currentProject.horzimage} alt="Description of image" className="h-auto" />
                  )}
                </section>

                {/* Key Features */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                  <div className="grid gap-4">
                    {currentProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentProject.color} rounded-full mt-2 flex-shrink-0`}
                        />
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technology Stack */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white border border-slate-200 text-slate-800 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Project Impact */}
                {currentProject.impact && (
                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Impact</h3>
                    <div className={`bg-gradient-to-r ${currentProject.color} p-8 rounded-2xl text-white shadow-2xl`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {currentProject.impact.map((stat, index) => (
                          <div key={index} className="space-y-2">
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="text-white/90 font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Reflections and Future Plans */}
                <section className="pb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Reflections & Future Plans</h3>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl space-y-6">
                    {currentProject.futurePlans && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Future Plans</h4>
                        <p className="text-slate-700 leading-relaxed">{currentProject.futurePlans}</p>
                      </div>
                    )}
                    {currentProject.reflections && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Personal Reflections</h4>
                        <p className="text-slate-700 leading-relaxed italic font-medium">
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
          // Skills view
          <div className="lg:w-3/5 lg:ml-auto w-full min-h-screen bg-white/80 backdrop-blur-sm">
            <div className="p-8 lg:p-12">
              <header className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">Technical Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mb-6" />
                <p className="text-xl text-slate-600">
                  A comprehensive overview of my technical expertise and proficiency levels
                </p>
              </header>

              <div className="space-y-8">
                {Object.entries(skills).map(([category, data]) => (
                  <section key={category} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{category}</h3>

                    {category === "Programming Languages & IDEs" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-green-700 mb-3">Proficient</h4>
                          <div className="flex flex-wrap gap-2">
                            {"proficient" in data &&
                              Array.isArray(data.proficient) &&
                              data.proficient.map((skill: string) => (
                                <span
                                  key={skill}
                                  className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-yellow-700 mb-3">Moderate</h4>
                          <div className="flex flex-wrap gap-2">
                            {"moderate" in data &&
                              Array.isArray(data.moderate) &&
                              data.moderate.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-blue-700 mb-3">IDEs</h4>
                          <div className="flex flex-wrap gap-2">
                            {"ides" in data &&
                              Array.isArray(data.ides) &&
                              data.ides.map((ide) => (
                              <span
                                key={ide}
                                className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
                              >
                                {ide}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {category === "Database Management" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-purple-700 mb-3">Relational Databases</h4>
                          <div className="flex flex-wrap gap-2">
                            {"relational" in data &&
                              Array.isArray(data.relational) &&
                              data.relational.map((db) => (
                              <span
                                key={db}
                                className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium"
                              >
                                {db}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-700 mb-3">NoSQL Databases</h4>
                          <div className="flex flex-wrap gap-2">
                            {"nosql" in data &&
                              Array.isArray(data.nosql) &&
                              data.nosql.map((db) => (
                              <span
                                key={db}
                                className="px-3 py-2 bg-cyan-100 text-cyan-800 rounded-lg text-sm font-medium"
                              >
                                {db}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-orange-700 mb-3">Big Data & Distributed Systems</h4>
                          <div className="flex flex-wrap gap-2">
                            {"bigData" in data &&
                              Array.isArray(data.bigData) &&
                              data.bigData.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-pink-700 mb-3">Database Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {"tools" in data &&
                              Array.isArray(data.tools) &&
                              data.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium"
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
                              className="px-3 py-2 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        {Array.isArray((data as any).items) &&
                          (data as { items: string[] }).items.map((item: string) => (
                            <span
                              key={item}
                              className="px-3 py-2 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium"
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

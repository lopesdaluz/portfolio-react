import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaVuejs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const technologies = [
  { icon: FaHtml5, name: "HTML5", color: "hover:text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "hover:text-blue-500" },
  { icon: FaJsSquare, name: "JavaScript", color: "hover:text-yellow-400" },
  { icon: FaReact, name: "React", color: "hover:text-cyan-400" },
  { icon: FaNodeJs, name: "Node.js", color: "hover:text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "hover:text-green-600" },
  { icon: SiExpress, name: "Express.js", color: "hover:text-gray-400" },
  { icon: FaGitAlt, name: "Git", color: "hover:text-orange-600" },
  { icon: FaGithub, name: "GitHub", color: "hover:text-purple-400" },
  { icon: SiTypescript, name: "TypeScript", color: "hover:text-blue-600" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "hover:text-blue-400" },
  { icon: FaNpm, name: "npm", color: "hover:text-red-500" },
  { icon: SiDocker, name: "Docker", color: "hover:text-blue-500" },
  { icon: FaVuejs, name: "Vue.js", color: "hover:text-emerald-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Tech Stack
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center p-4 rounded-xl 
                        bg-white/5 backdrop-blur-sm hover:bg-white/10 
                        transition-all duration-300 ease-in-out"
            >
              <tech.icon 
                className={`w-12 h-12 mb-4 transition-all duration-300 
                           text-gray-400 ${tech.color} group-hover:scale-110`} 
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

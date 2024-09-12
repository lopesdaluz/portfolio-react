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

export default function skills() {
  return (
    <section className="skills-content" id="skills">
      <div className="skills-title">
        <h2>Tech Stack</h2>
      </div>
      <div className="skills-icons">
        <FaHtml5 className="tech-icon html-icon" title="HTML5" />
        <FaCss3Alt className="tech-icon css-icon" title="CSS3" />
        <FaJsSquare className="tech-icon js-icon" title="JavaScript" />
        <FaReact className="tech-icon react-icon" title="React" />
        <FaNodeJs className="tech-icon node-icon" title="Node.js" />
        <SiMongodb className="tech-icon mongodb-icon" title="MongoDB" />
        <SiExpress className="tech-icon express-icon" title="Express.js" />
        <FaGitAlt className="tech-icon git-icon" title="Git" />
        <FaGithub className="tech-icon github-icon" title="GitHub" />
        <SiTypescript
          className="tech-icon typescript-icon"
          title="TypeScript"
        />
        <SiPostgresql
          className="tech-icon postgresql-icon"
          title="PostgreSQL"
        />
        <FaNpm className="tech-icon npm-icon" title="npm" />
        <SiDocker className="tech-icon docker-icon" title="Docker" />
        <FaVuejs className="tech-icon vue-icon" title="Vue.js" />
      </div>
    </section>
  );
}

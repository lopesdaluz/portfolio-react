import { useState, useEffect } from "react";
import "../styles/projects.css";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/lopesdaluz/repos"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="project-title">
        <h2>My projects</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="projects-list">
          {repos.map((repo) => (
            <div key={repo.id} className="project">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description available."}</p>
              <a
                href={repo.html_url}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                view project
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

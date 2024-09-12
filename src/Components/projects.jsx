import { useState, useEffect } from "react";
import "../styles/projects.css";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const sliderSettings = {
    dots: true,
    infiinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpont: 1024,
        settings: {
          slidestoShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpont: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="projects" id="projects">
      <div className="project-title">
        <h2>My projects</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...sliderSettings}>
          {repos.map((repo) => (
            <div key={repo.id} className="projec-slide">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description available."}</p>
              <a
                href={repo.html_url}
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                view project
              </a>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}

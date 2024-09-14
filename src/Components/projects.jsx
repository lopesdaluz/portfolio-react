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
        console.log(response.data);
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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
            <section key={repo.id} className="projec-slide">
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
            </section>
          ))}
        </Slider>
      )}
    </section>
  );
}

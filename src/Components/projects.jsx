import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const featured = [
      "memory-match-game",
      "BlackFriday-React",
      "StarWars",
      "PallyCopy",
    ];

    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/lopesdaluz/repos"
        );
        // Filter only featured repos
        const filtered = response.data.filter((repo) =>
          featured.includes(repo.name)
        );
        setRepos(filtered);
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (error) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-red-400">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="relative px-4">
            <Slider {...sliderSettings} className="project-slider">
              {repos.map((repo) => (
                <div key={repo.id} className="p-4">
                  <div
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full 
                               hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 capitalize">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {repo.description || "No description available."}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={repo.html_url}
                        className="inline-flex items-center px-4 py-2 bg-primary/20 hover:bg-primary/30 
                                 text-primary rounded-lg transition-all duration-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}

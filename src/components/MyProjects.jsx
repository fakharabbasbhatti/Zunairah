import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

// Import your project images
import img1 from "../Images/shiping.jpg";
import img2 from "../Images/lawyer.jpg";
import img3 from "../Images/lundary.jpg";
import img4 from "../Images/charity.jpeg";
import img5 from "../Images/carrent.jpg";
import img6 from "../Images/foodymat.jpg";

const MyProjects = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      pic: img1,
      title: "The Givers Consultancy",
      link: "https://thegiversconsulting.com",
      category: "Consulting",
    },
    {
      pic: img2,
      title: "Lawyer",
      link: "https://lawyer-pi-three.vercel.app/",
      category: "Law Services",
    },
    {
      pic: img3,
      title: "Laundry",
      link: "https://lundary.vercel.app/",
      category: "Clothing Brand",
    },
    {
      pic: img4,
      title: "Charity Blush",
      link: "https://charity-blush-psi.vercel.app/",
      category: "Donate",
    },
    {
      pic: img5,
      title: "Car Rental",
      link: "https://car-rental-yellow.vercel.app/",
      category: "Travel & Transportation",
    },
    {
      pic: img6,
      title: "Foodymat Restaurant",
      link: "https://restaurant-rho-ruddy.vercel.app/",
      category: "Restaurant Service Dining",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Fragment>
      <section
        id="projects"
        className="relative py-20 px-6 bg-gray-900 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block tracking-tight"
            >
              My{" "}
              <span className="text-[#38bdf8] bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              A showcase of my recent work and professional achievements,
              demonstrating creativity, skill, and innovation in each project.
            </p>
          </div>

          {/* Projects Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Project Images */}
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
                  <img
                    src={project.pic}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlays */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Projects Infos */}
                <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-500 transform translate-y-0 group-hover:-translate-y-2">
                  <span
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-[#38bdf8] rounded-full shadow-sm"
                  >
                    {project.category}
                  </span>
                  <h3
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide"
                  >
                    {project.title}
                  </h3>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
                  >
                    <span className="mr-2">View Project</span>
                    <MdArrowOutward className="text-lg" />
                  </div>
                </div>

                {/* Centers Icons on Hovers */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="border-2 border-white rounded-full p-4 animate-pulse">
                    <MdArrowOutward className="text-2xl text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          } 
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </Fragment>
  );
};

export default MyProjects;

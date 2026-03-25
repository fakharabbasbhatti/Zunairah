import { Fragment, useEffect } from "react";
import About from "../Images/Zunairah.jpg";
import resume from "../Images/FakharAbbas.pdf";
import { FaDownload, FaUserTie, FaCode, FaPalette, FaWordpress } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Zunaira.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    {
      icon: <FaUserTie className="text-[#38bdf8] text-xl sm:text-2xl" />,
      title: "Frontend Dev",
      description: "Building responsive and interactive user interfaces",
      aos: "fade-right",
    },
    {
      icon: <FaWordpress className="text-[#21759b] text-xl sm:text-2xl" />,
      title: "WordPress",
      description: "Custom themes, plugins & CMS-based solutions",
      aos: "fade-up",
    },
    {
      icon: <FaPalette className="text-[#38bdf8] text-xl sm:text-2xl" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing designs",
      aos: "fade-left",
    },
  ];

  return (
    <Fragment>
      <div
        id="about"
        className="relative py-16 bg-gray-900 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-28 sm:w-40 h-28 sm:h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-purple-600 opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        {/* ✅ FIXED CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-10"
          >
            About <span className="text-[#38bdf8]">Me</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            
            {/* Image */}
            <div
              data-aos="zoom-in-down"
              className="w-full lg:w-2/5 relative group flex justify-center lg:justify-start"
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float-slow">
                
                <div className="absolute inset-0 rounded-full bg-[#38bdf8]/20 opacity-0 group-hover:opacity-100 transition duration-700 blur-3xl"></div>

                <img
                  src={About}
                  alt="Zunaira"
                  className="w-full h-full object-cover rounded-full p-3 sm:p-4 border-4 border-[#38bdf8] z-10 relative shadow-xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-3"
                />

                <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-30 z-0 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-15 z-0 animate-pulse-delay"></div>

                <span
                  data-aos="fade-down"
                  className="absolute top-3 left-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md font-medium z-20"
                >
                  React Developer
                </span>

                <span
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="absolute bottom-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md font-medium z-20"
                >
                  Python Developer
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <h2
                data-aos="zoom-in"
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                I'm <span className="text-[#38bdf8]">Zunairah Rehman</span>, a
                passionate React Developer & Python Developer
              </h2>

              <p
                data-aos="zoom-in-up"
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
              >
                Specializing in React.js and Python, I build scalable, high-performance web applications with a focus on clean architecture and seamless user experience. I have hands-on experience developing responsive front-end interfaces, RESTful APIs, and dynamic dashboards. My work emphasizes maintainability, performance optimization, and intuitive design. I enjoy turning complex requirements into efficient, user-friendly solutions while continuously improving my skills with modern tools and best practices.
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start w-full">
                <button
                  onClick={handleDownload}
                  data-aos="flip-up"
                  className="mt-8 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white px-6 py-2 sm:py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-[#38bdf8]/40"
                >
                  Download CV <FaDownload />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animations (UNCHANGED) */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes pulse-delay {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .animate-pulse-delay { animation: pulse-delay 4s ease-in-out infinite 2s; }
      `}</style>
    </Fragment>
  );
};

export default AboutMe;
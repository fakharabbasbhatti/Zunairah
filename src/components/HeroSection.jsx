import { Fragment, useEffect } from "react";
import { FaPaperPlane, FaRocket, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Images/Zunairah.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socialLinks = [
   {
      icon: <FaLinkedinIn className="h-5 w-5" />,
      onClick: () => window.open("", "_blank"),
      color: "hover:bg-blue-500 hover:shadow-[0_0_15px_#38bdf8]",
      aos: "flip-up",
    },
     {
      icon: <FaTiktok className="h-5 w-5" />,
      onClick: () => window.open("https://www.tiktok.com/", "_blank"),
      color: "hover:bg-gray-800 hover:shadow-[0_0_15px_#6b7280]",
      aos: "flip-right",
    },
     {
      icon: <FaFacebookF className="h-5 w-5" />,
      onClick: () => window.open("https://facebook.com", "_blank"),
      color: "hover:bg-blue-600 hover:shadow-[0_0_15px_#2563eb]",
      aos: "flip-left",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      onClick: () => window.open("https://github.com/fakharabbasbhatti", "_blank"),
      color: "hover:bg-gray-800 hover:shadow-[0_0_15px_#6b7280]",
      aos: "flip-right",
    },
  ];

  return (
    <Fragment>
      <section
        id="home"
        className="relative flex justify-center items-center min-h-screen 
                    bg-gray-900 overflow-hidden pt-10 sm:pt-20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-aos="zoom-in"
            className="absolute top-20 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 
                       rounded-full bg-cyan-400 opacity-20 blur-3xl animate-float"
          ></div>
          <div
            data-aos="zoom-out"
            className="absolute bottom-10 right-10 sm:right-20 w-24 sm:w-28 h-24 sm:h-28 
                       rounded-full bg-cyan-600 opacity-20 blur-3xl animate-float-delay"
          ></div>
        </div>

        {/* ✅ Changed flex direction */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-7xl z-10 py-20">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <span
              data-aos="fade-down"
              className="text-[#38bdf8] font-mono tracking-widest text-base sm:text-lg"
            >
              👋 Hello, I'm
            </span>

            <h1
              data-aos="fade-right"
              className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              Zunairah Rehman
            </h1>

            <div
              data-aos="fade-left"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-10 sm:h-12"
            >
              <span className="text-white">
                <Typewriter
                  words={["Front-End Developer", "UI/UX Designer", "React Specialist", "Web Enthusiast"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p
              data-aos="fade-up"
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              I design modern, responsive websites with clean code,<span className="text-[#38bdf8] font-semibold"> fluid animations </span> &
              <span className="text-[#0ea5e9] font-semibold"> intuitive user experiences, </span>  
                  delivering engaging digital solutions that merge creativity, performance, and seamless functionality.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-10 justify-center sm:justify-start">
              {/* Contact Me */}
              <button
                data-aos="fade-down"
                className="relative bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] 
                           text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold 
                           text-sm sm:text-base flex items-center gap-2 transition-all duration-500 
                           transform hover:scale-110 shadow-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out"></span>
                <FaPaperPlane className="z-10" />
                <span className="z-10">Contact Me</span>
              </button>

              {/* View Projects */}
              <button
                data-aos="fade-up"
                className="relative border-2 border-[#38bdf8] text-[#38bdf8] px-4 py-2 sm:px-6 sm:py-3 
                           rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 
                           transition-all duration-500 transform hover:scale-110 hover:bg-[#38bdf8] 
                           hover:text-white shadow-md group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                               -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out"></span>
                <FaRocket className="z-10" />
                <span className="z-10">View Projects</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h2
                data-aos="fade-down"
                className="text-gray-400 mb-4 tracking-wide text-sm sm:text-base"
              >
                🌐 Connect with me
              </h2>
              <div className="flex justify-center md:justify-start items-center gap-2">
                {socialLinks.map((item, index) => (
                  <button
                    key={index}
                    data-aos={item.aos}
                    onClick={item.onClick}
                    aria-label="Social Link"
                    className={`text-white cursor-pointer flex justify-center items-center bg-gray-800 ${item.color} 
                               h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-500 transform hover:scale-110`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Hero Image) */}
          <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] animate-float-slow group">
              <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#0ea5e9] opacity-20 animate-pulse-delay"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-full scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-80 transition-all duration-700 bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8] blur-3xl"></div>

              {/* Profile Image */}
              <img
                src={Hero}
                alt="Zunairah profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#38bdf8] shadow-2xl relative transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 p-3 sm:p-5"
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg">
                React Developer
              </div>
              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg">
                Python Developer
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
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
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes pulse-delay {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.1); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-pulse { animation: pulse 4s ease-in-out infinite; }
          .animate-pulse-delay { animation: pulse-delay 5s ease-in-out infinite 1s; }
        `}</style>
      </section>
    </Fragment>
  );
};

export default HeroSection;

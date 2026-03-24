import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiWordpress, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const MySkills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 90, color: "bg-[#E44D26]" },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 85, color: "bg-[#264DE4]" },
    { name: "Bootstrap", icon: <FaBootstrap />, percentage: 80, color: "bg-[#7952B3]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 90, color: "bg-[#38BDF8]" },
    { name: "Framer Motion", icon: <TbBrandFramerMotion />, percentage: 86, color: "bg-[#0055FF]" },
    { name: "JavaScript", icon: <FaJs />, percentage: 75, color: "bg-[#F7DF1E]" },
    { name: "React.js", icon: <FaReact />, percentage: 80, color: "bg-[#61DAFB]" },
    { name: "WordPress", icon: <SiWordpress />, percentage: 92, color: "bg-[#21759B]" },
  ];

  // Different AOS animations
  const animations = [
    "fade-up",
    "fade-down",
    "fade-right",
    "fade-left",
    "zoom-in",
    "zoom-in-up",
    "flip-left",
    "flip-right",
  ];

  return (
    <section id="skills" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-20 rounded-full blur-3xl animate-float-delay"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of the technologies and frameworks I use to craft scalable,
            modern, and visually engaging digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              data-aos={animations[index % animations.length]} // Different AOS per card
              data-aos-delay={index * 120}
              key={index}
              className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-64 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:shadow-[#38bdf8]/30 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-4xl text-[#38bdf8] group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-white text-center">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center font-medium">
                  Proficiency: <span className="text-white">{skill.percentage}%</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(-10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default MySkills;

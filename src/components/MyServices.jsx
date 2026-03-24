import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { SiWordpress } from "react-icons/si";

const MyServices = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Frontend Development",
      description: "Building responsive, interactive interfaces with React.js, Tailwind CSS, and Bootstrap to deliver seamless, fast, and engaging digital experiences.",
      gradient: "from-blue-500 to-cyan-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up"
    },
 {
      icon: <SiWordpress className="text-3xl" />,
      title: "WordPress Development",
      description: "Developing fully customized, scalable websites and blogs with WordPress, leveraging its extensive plugin ecosystem and strong global community support.",
      gradient: "from-blue-600 to-indigo-500",
      aosIcon: "zoom-in",
      aosTitle: "flip-right",
      aosDesc: "fade-up"
    },
     {
      icon: <SiFastapi className="text-3xl" />,
      title: "API Integration",
      description: "Seamlessly integrating third-party APIs, secure payment gateways, and robust authentication systems to enhance functionality, scalability, and user experience.",
      gradient: "from-teal-500 to-emerald-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-up",
      aosDesc: "fade-right"
    },
    {
      icon: <MdAnimation className="text-3xl" />,
      title: "Immersive Animations",
      description: "Creating immersive digital experiences through animations, micro-interactions, and motion design using Framer Motion, GSAP, AOS, and advanced CSS techniques.",
      gradient: "from-indigo-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up"
    },
   
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Responsive Design",
      description: "Ensuring consistent, responsive, and device-friendly layouts with optimized interactions to deliver seamless, user-focused experiences across all platforms.",
      gradient: "from-sky-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "flip-left",
      aosDesc: "fade-up"
    },
   
    {
      icon: <FaCloudUploadAlt className="text-3xl" />,
      title: "Deployment & Maintenance",
      description: "Deploying applications on Vercel, Netlify, and AWS with continuous updates, performance optimizations, robust monitoring, and advanced security enhancements",
      gradient: "from-violet-500 to-purple-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up"
    }
  ];

  return (
    <Fragment>
      <section id="services" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block group"
            >
              Our <span data-aos="zoom-in" data-aos-delay="100" className="text-[#38bdf8]">Services</span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Delivering tailored digital solutions to empower your business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800 rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#38bdf8]/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div 
                    data-aos={service.aosIcon} 
                    data-aos-delay={index * 100}
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gray-700 group-hover:bg-white transition-all duration-500"
                  >
                    <span className="text-[#38bdf8] group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 
                    data-aos={service.aosTitle} 
                    data-aos-delay={index * 150} 
                    className="text-2xl font-semibold text-white mb-3"
                  >
                    {service.title}
                  </h3>
                  <p 
                    data-aos={service.aosDesc} 
                    data-aos-delay={index * 200} 
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </Fragment>
  );
};

export default MyServices;
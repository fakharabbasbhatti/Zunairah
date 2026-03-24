import { Fragment, useState, useEffect } from "react"; 
import { IoMdMenu } from "react-icons/io";
import { IoLogoAmplify } from "react-icons/io5";
import { IoCloseSharp, IoLogoBuffer } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const mobileNavVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <Fragment>
      <motion.nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0f172a]/95 backdrop-blur-md py-2 shadow-xl" : "bg-[#0f172a]/90 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-0 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center relative group cursor-pointer"
            onClick={() => window.location.href = "#home"}
          >
            {/* Logo Icon */}
            <div className="relative">
              <IoLogoAmplify
                className="text-[#38bdf8] text-3xl relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#38bdf8]"
              />
              {/* Glow Ring */}
              <span className="absolute inset-0 rounded-full border-2 border-[#38bdf8] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-md"></span>
            </div>

            {/* Name Text */}
            <span className="ml-2 text-white font-bold text-xl hidden sm:block relative overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38bdf8] group-hover:to-[#0ea5e9]">
                Zunairah Rehman
              </span>

              {/* Shiny Sweep on Text */}
              <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            </span>
          </motion.div>

          {/* Nav Items */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    className="relative text-[#e2e8f0] text-lg font-medium transition-all duration-300
                               group-hover:text-transparent group-hover:bg-clip-text 
                               group-hover:bg-gradient-to-r group-hover:from-[#38bdf8] group-hover:to-[#0ea5e9]
                               group-hover:drop-shadow-[0_0_8px_#38bdf8] p-1"
                  >
                    {item.name}

                    {/* Underline (bottom) */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] transition-all duration-500 ease-out group-hover:w-full"></span>
                    
                    {/* Underline (top) */}
                    <span className="absolute right-0 top-0 w-0 h-0.5 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] transition-all duration-500 ease-out group-hover:w-full"></span>

                    {/* Shiny Light Sweep */}
                    <span className="absolute inset-0 overflow-hidden">
                      <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-6 py-2 rounded-full font-semibold relative z-10 overflow-hidden shadow-lg"
              >
                Contact
              </a>

              {/* Shine Effect */}
              <span className="absolute inset-0 overflow-hidden rounded-full z-0">
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></span>
              </span>

              {/* Glow Ring */}
              <span className="absolute inset-0 rounded-full border-2 border-[#38bdf8] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out blur-md"></span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <IoCloseSharp className="text-3xl text-[#38bdf8]" />
            ) : (
              <IoMdMenu className="text-3xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden bg-[#0f172a]/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul className="container mx-auto px-6 py-4 flex flex-col gap-6">
                {[...navItems, { name: "Contact", href: "#contact" }].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={mobileNavVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="border-b border-[#1e293b] pb-2 last:border-0"
                  >
                    <a
                      onClick={closeMenu}
                      href={item.href}
                      className="flex items-center justify-between text-[#e2e8f0] text-lg font-medium relative transition-all duration-300 group
                                 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#38bdf8] hover:to-[#0ea5e9]"
                    >
                      {item.name}
                      <FaArrowRight className="text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
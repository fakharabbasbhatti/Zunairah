import { Fragment, useState, useEffect } from "react"; 
import { IoMdMenu } from "react-icons/io";
import { IoLogoAmplify } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
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
          scrolled
            ? "bg-[#0f172a]/95 backdrop-blur-md py-2 shadow-xl"
            : "bg-[#0f172a]/90 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ✅ MAIN CONTAINER FIXED */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => window.location.href = "#home"}
          >
            <IoLogoAmplify className="text-[#38bdf8] text-3xl" />
            <span className="ml-2 text-white font-bold text-xl hidden sm:block">
              Zunairah Rehman
            </span>
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#e2e8f0] text-lg font-medium hover:text-[#38bdf8] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Contact Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-6 py-2 rounded-full font-semibold"
              >
                Contact
              </a>
            </div>

            {/* Mobile Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <IoCloseSharp className="text-3xl text-[#38bdf8]" />
              ) : (
                <IoMdMenu className="text-3xl" />
              )}
            </button>

          </div>
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
              <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-6">
                {[...navItems, { name: "Contact", href: "#contact" }].map((item, index) => (
                  <li key={index} className="border-b border-[#1e293b] pb-2 last:border-0">
                    <a
                      onClick={closeMenu}
                      href={item.href}
                      className="flex items-center justify-between text-[#e2e8f0] text-lg font-medium hover:text-[#38bdf8]"
                    >
                      {item.name}
                      <FaArrowRight className="text-[#38bdf8]" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
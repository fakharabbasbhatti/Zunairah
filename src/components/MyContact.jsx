import { Fragment, useRef, useEffect } from "react"; 
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MyContact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    form.current.reset();
  };

  const contactInfo = [
    { icon: <MdLocationPin className="text-3xl text-[#38bdf8]" />, text: "Burewala, Punjab, Pakistan", link: "#" },
    { icon: <CgMail className="text-3xl text-[#38bdf8]" />, text: "Zunaira Abdul Rehman", link: "mailto:Zunairaabdulrehman657@gmail.com" },
    { icon: <FaPhoneAlt className="text-3xl text-[#38bdf8]" />, text: "+92 315 9834167", link: "tel:+923159834167" },
      { icon: <CgWebsite className="text-3xl text-[#38bdf8]" />, text: "https://zunaira-rehman.vercel.app/", link: "https://zunaira-rehman.vercel.app/" },
  ];

  return (
    <Fragment>
      <section id="contact" className="relative py-24 px-6 bg-gray-900 min-h-screen overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-z60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group"
            >
              Get In <span className="text-[#38bdf8]">Touch</span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss potential opportunities? Let's connect!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" className="w-full lg:w-1/2 bg-gray-800 p-5 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-8">Send me a message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Your Name</label>
                    <input type="text" name="from_name" required placeholder="John Doe" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Your Email</label>
                    <input type="email" name="from_email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" name="from_phone" required placeholder="+92 300 1234567" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Your Message</label>
                  <textarea name="message" rows="5" required placeholder="Hello Fakhar, I would like to discuss..." className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#38bdf8]/30">
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left" className="w-full lg:w-1/2 bg-gray-800 p-5 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 group"
                  >
                    <div className="mt-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38bdf8] transition-colors duration-300">
                        {item.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12" data-aos="fade-up" data-aos-delay={600}>
                <h3 className="text-xl font-semibold text-white mb-4">Available for work</h3>
                <p className="text-gray-300">
                  I'm currently available for freelance projects and full-time positions. Feel free to reach out for collaborations or just to say hello!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover theme="dark" />

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

export default MyContact;

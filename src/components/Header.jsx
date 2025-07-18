import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        Software Developer
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          href="https://wa.me/905442232136"
          target="_blank"
          rel="noopener noreferrer"
          className="z-20 flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
        >
          <i className="bx bxl-whatsapp text-2xl"></i>Whatsapp
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          href="https://instagram.com/mert_guna_"
          target="_blank"
          rel="noopener noreferrer"
          className="z-20 flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
        >
          <i className="bx bxl-instagram text-2xl"></i>Instagram
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          href="https://github.com/gunaymert66"
          className="z-20 flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
        >
          <i className="bx bxl-github text-2xl"></i>GitHub
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-delay="1000"
          data-aos-duration="3000"
          href="https://linkedin.com/in/ibrahim-mert-232920308/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-20 flex items-center justify-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
        >
          <i className="bx bxl-linkedin text-2xl cursor-pointer"></i>LinkedIn
        </a>
      </nav>

      {/* Portfolio Button */}
      <a
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="1500"
        data-aos-duration="3000"
        href="#"
        className="ml-3 hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white z-50"
      >
        Portfolio
      </a>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 left-0 right-0 bottom-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="https://wa.me/905442232136"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
          >
            <i className="bx bxl-whatsapp text-2xl"></i>Whatsapp
          </a>
          <a
            href="https://instagram.com/mert_gunay_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
          >
            <i className="bx bxl-instagram text-2xl"></i>Instagram
          </a>
          <a
            href="https://github.com/gunaymert66"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
          >
            <i className="bx bxl-github text-2xl"></i>GitHub
          </a>
          <a
            href="https://linkedin.com/in/ibrahim-mert-232920308/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base tracking-wider hover:text-gray-300 transition-colors cursor-pointer"
          >
            <i className="bx bxl-linkedin text-2xl"></i>LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

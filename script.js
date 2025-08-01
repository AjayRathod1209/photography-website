document.addEventListener("DOMContentLoaded", () => {
  // ======= Navbar hide/show on scroll for desktop =======
  const navbar = document.getElementById("main-navbar");
  let prevScroll = window.scrollY;

  function handleScroll() {
    const currentScroll = window.scrollY;
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      if (currentScroll > prevScroll) {
        navbar.style.transform = "translateY(-100%)"; // Hide
      } else {
        navbar.style.transform = "translateY(0)"; // Show
      }
    } else {
      navbar.style.transform = "translateY(0)";
    }

    prevScroll = currentScroll;
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  // ======= Mobile Menu Toggle =======
  const toggleButton = document.getElementById("menu-toggle");
  const closeButton = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = mobileMenu.querySelectorAll("a");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    toggleButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    toggleButton.classList.remove("hidden");
    closeButton.classList.add("hidden");
  });

  // Hide menu when any link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      toggleButton.classList.remove("hidden");
      closeButton.classList.add("hidden");
    });
  });
});

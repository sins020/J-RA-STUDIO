document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Animações simples ao rolar
  const fadeElements = document.querySelectorAll(".project-card, .sobre p, .floating-window");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => appearOnScroll.observe(el));
});

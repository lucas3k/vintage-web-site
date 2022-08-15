export default function menuMobile() {
  const events = ["click", "touchstart"];
  const classACtiveName = "active-visibility";
  const btnMobile = document.querySelector('[data-navigation="btn-mobile"]');
  const linksMobile = document.querySelectorAll('[data-link="btn-link-nav"]');

  const toggleActive = (e) => {
    const navigation = document.querySelector(
      '[data-navigation="navigation-links"]'
    );
    navigation.classList.toggle(classACtiveName);

    const active = navigation.classList.contains(classACtiveName);
    e.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
      e.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      e.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  };

  if (btnMobile && linksMobile) {
    const toggleMenuMobile = (event) => {
      if (event.type === events[1]) {
        event.preventDefault();
      }

      toggleActive(event);
    };

    events.forEach((event) => {
      btnMobile.addEventListener(event, toggleMenuMobile);
    });

    events.forEach((event) => {
      linksMobile.forEach((link) => {
        link.addEventListener(event, toggleMenuMobile);
      });
    });
  }
}

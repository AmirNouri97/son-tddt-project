
  const links = document.querySelectorAll('.nav-link');
  const currentUrl = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === currentUrl.split('/').pop()) {
      link.classList.add('active');
    }
  });

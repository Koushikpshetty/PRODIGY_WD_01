(function(){
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  // Toggle mobile menu
  navToggle.addEventListener('click', ()=>{
    navList.classList.toggle('open');
  });

  // Change nav style on scroll
  function onScroll(){
    if(window.scrollY > 40){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Highlight active section link
    const fromTop = window.scrollY + nav.offsetHeight + 10;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if(!section) return;
      if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  document.addEventListener('DOMContentLoaded', onScroll);

  // Close mobile menu when clicking a link
  navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
      if(navList.classList.contains('open')) navList.classList.remove('open');
    });
    // Hover effect handled by CSS, but we can add for touch devices
    link.addEventListener('touchstart', ()=>{
      navLinks.forEach(l=>l.classList.remove('hover'));
      link.classList.add('hover');
    });
  });
})();

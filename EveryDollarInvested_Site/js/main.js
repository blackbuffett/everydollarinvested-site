(function(){
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainmenu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const obs = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

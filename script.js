// Pequeñas mejoras: smooth scroll y manejo de enlaces de ancla
document.addEventListener('click', function(e){
  const t = e.target.closest('a[href^="#"]');
  if(!t) return;
  const href = t.getAttribute('href');
  if(href === '#') return;
  const el = document.querySelector(href);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth',block:'start'});
  }
});

// Intento de carga de imagen de perfil alternativa
window.addEventListener('DOMContentLoaded', ()=>{
  const img = document.querySelector('.photo');
  img.onerror = ()=>{
    img.src = 'https://via.placeholder.com/300?text=Foto+no+disponible';
  };
});

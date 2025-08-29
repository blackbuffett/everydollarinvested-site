(function(){
  const toggle=document.getElementById('menuToggle');
  const menu=document.getElementById('mainmenu');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
})();

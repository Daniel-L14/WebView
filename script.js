// Cambiar sabor
document.querySelectorAll('button[data-flavor]').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const flavor = btn.dataset.flavor;
    const slush = document.getElementById('slush');
    slush.className = 'slush flavor-' + flavor;
  });
});

// Simular pedido
document.getElementById('orderBtn').addEventListener('click', ()=> {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = 'Pedido enviado 🎉';
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.style.opacity = 1);
  setTimeout(()=>{ t.style.opacity = 0; setTimeout(()=> t.remove(),300); },1600);
});

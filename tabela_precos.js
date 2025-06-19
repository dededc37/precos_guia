// Expansão animada dos cards
const cards = document.querySelectorAll('.plan-card');
const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach((btn, idx) => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    cards.forEach((card, i) => {
      if (i === idx) {
        card.classList.toggle('expanded');
      } else {
        card.classList.remove('expanded');
      }
    });
  });
  // Acessibilidade: expandir ao pressionar Enter
  btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      btn.click();
    }
  });
});

// Seleção de plano
const selectBtns = document.querySelectorAll('.select-btn');
selectBtns.forEach((btn, idx) => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    let msg = '';
    switch(idx) {
      case 0:
        msg = 'Você selecionou o Plano Grátis! Ideal para começar a divulgar sua empresa.';
        break;
      case 1:
        msg = 'Você selecionou o Plano Destaque! Sua marca em evidência com banner personalizado e contato direto.';
        break;
      case 2:
        msg = 'Você selecionou o Plano Premium! Catálogo exclusivo e identidade visual completa para sua empresa.';
        break;
    }
    alert(msg);
  });
}); 
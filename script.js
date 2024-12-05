// Sélectionne toutes les icônes
const icons = document.querySelectorAll('li img');

//événement mouseover pour chaque icône
icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('green'); 
  });

  //événement mouseout pour retirer la classe
  icon.addEventListener('mouseout', () => {
    icon.classList.remove('green'); 
  });
});
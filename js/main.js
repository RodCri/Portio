const navOptions = document.querySelector('.nav__options');
const hamburguer = document.querySelector('#hamburger');

hamburguer.addEventListener('click',()=>{
  if(hamburguer.checked){
    navOptions.classList.add('show');
  }
  else{
    navOptions.classList.remove('show');
  }
})
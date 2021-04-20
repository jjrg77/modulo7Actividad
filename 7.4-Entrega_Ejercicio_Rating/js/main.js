
const inputs = document.querySelectorAll('#principal input');
const caja = document.getElementById('principal');
const section = document.getElementById('starDiv');
const body = document.getElementById('body');

body.addEventListener('click', (e) => {
   console.log(e);
   if(e.target.id === 'body'){
      change();
   };
});

caja.addEventListener('click', (e) => {
   console.log('dentro de caja');
   if(e.target.id === 'body'){
      change();
   };
});

const change = () => {
   section.classList.remove('star');
   section.classList.add('starIni');
}

const initial = () => {
   section.classList.remove('starIni');
   section.classList.add('star');
}

inputs.forEach((input) => {
   input.addEventListener('click', initial);
   input.addEventListener('blur', change);
});




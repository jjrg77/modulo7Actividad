let nombre = ['J','O','A','Q','U','I','N'];
let apellido = ['R','O','D','R','I','G','U','E','Z'];
let fullName = [];

// FORMA 1
/* apellido.unshift(' ');

fullName = nombre.concat(apellido);

 console.log(fullName);*/

//FORMA 2
apellido.splice(0,0," ");

fullName = nombre.concat(apellido);

console.log(fullName);

/*También se podría haber planteado con el array nombre, añadiendo un elemento al final (.push() o .splice(7,0,' '))*/
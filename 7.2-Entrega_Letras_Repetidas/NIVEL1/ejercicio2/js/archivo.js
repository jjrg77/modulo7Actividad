let nombre = ['J','O','A','Q','U','I','N'];

for (let i=0; i<=nombre.length-1; i++){
    if (nombre[i] === 'A' || nombre[i] === 'E' || nombre[i] === 'I' || nombre[i] === 'O' || nombre[i] === 'U') {
        console.log(`He encontrado la vocal: ${nombre[i]}`);
    }
    else {
        console.log(`He encontrado la consonante: ${nombre[i]}`);
    }
}

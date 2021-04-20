let nombre = ['J','O','A','Q','U','I','N','R','O','D','R','I','G','U','E','Z'];
const resultado = {

}
const nombreMap = nombre.map((letra) => {
    //  n =  nombre[];
    if(!resultado[letra]) {
        resultado[letra] = 1
    }else{
        resultado[letra]++
    }
});
 console.log(resultado);


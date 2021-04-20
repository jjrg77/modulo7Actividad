// ---------------------------------------------------------------------
// ejercicio1
// ---------------------------------------------------------------------
function ejercicio1() {
  let nombre = ["J", "O", "A", "Q", "U", "I", "N"];
  for (let i = 0; i <= nombre.length - 1; i++) {
    console.log(nombre[i]);
  }
}
document.getElementById("button1").onclick = function () {
  ejercicio1();
};

// ---------------------------------------------------------------------
//ejercicio2
// ---------------------------------------------------------------------
function ejercicio2() {
  let nombre = ["J", "O", "A", "Q", "U", "I", "N"];

  for (let i = 0; i <= nombre.length - 1; i++) {
    if (
      nombre[i] === "A" ||
      nombre[i] === "E" ||
      nombre[i] === "I" ||
      nombre[i] === "O" ||
      nombre[i] === "U"
    ) {
      console.log(`He encontrado la vocal: ${nombre[i]}`);
    } else {
      console.log(`He encontrado la consonante: ${nombre[i]}`);
    }
  }
}



document.getElementById("button2").onclick = function () {
  ejercicio2();
};

// ---------------------------------------------------------------------
//ejercicio3 
// ---------------------------------------------------------------------
function ejercicio3(){

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
};

document.getElementById("button3").onclick = function () {
  ejercicio3();
};


// ---------------------------------------------------------------------
//ejercicio4
// ---------------------------------------------------------------------
function ejercicio4() {
  let nombre = ["J", "O", "A", "Q", "U", "I", "N"];
  let apellido = ["R", "O", "D", "R", "I", "G", "U", "E", "Z"];
  let fullName = [];
  apellido.splice(0, 0, " ");
  fullName = nombre.concat(apellido);
  console.log(fullName);
}
document.getElementById("button4").onclick = function () {
  ejercicio4();
};
// ---------------------------------------------------------------------
//ejercicio NIVEL 2
// ---------------------------------------------------------------------
function ejercNivel2() {
  const texto =
    "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

  //creamos función para eliminar duplicados
  const deleteDuplicate = (array) => {
    const finalMatch = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (!finalMatch.includes(array[i])) {
        finalMatch.push(element);
      }
    }
    return finalMatch;
  };

  const regExp = {
    emailRegex: /[a-zA-Z-]+@+[a-zA-ZñÑ-]+\.+[a-zA-Z]{2,3}/gm,
  };

  const matching = texto.match(regExp.emailRegex);

  //nos aseguramos por consola que devuelve TRUE
  console.log(regExp.emailRegex.test(texto));

  if (regExp.emailRegex.test(texto)) {
    console.log(deleteDuplicate(matching));

  } else {
    console.log("false");
  }
}

document.getElementById("button5").onclick = function () {
  ejercNivel2();
};

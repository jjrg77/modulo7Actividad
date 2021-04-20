const arrayTemp = [];
let idTemp;
const inputsForm = document.querySelectorAll("#form1 input");
class Product {
       constructor(productName, productPrice, productYear, id) {
              this.productName = productName,
                     this.productPrice = productPrice,
                     this.productYear = productYear,
                     this.id = id;
       }
}
class Interfaz {
       //métodos de la interfaz
       CleanForm() {
              document.getElementById('form').reset();
              valida.nameProduct = false;
              valida.priceProduct = false;
       };

       AddProduct(product) {
              const productListDiv = document.getElementById('productList');
              const element = document.createElement('div');
              element.innerHTML = `
                     <div class="card text-center mb-2">
                            <div class="card-body">
                                   <hr>
                                   <strong>Referencia del producto: </strong>${product.id}<br>
                                   <hr>
                                   <strong>Producto: </strong> ${product.productName}<br />
                                   <strong>Precio: </strong> ${product.productPrice} €<br />
                                   <strong>Año: </strong> ${product.productYear}<br />
                                   <a href="#"><i id="${product.id}" class="fas fa-trash-alt i"></i></a>
                            </div>
                     </div>
              `;
              productListDiv.appendChild(element);
              valida.nameProduct = true;
              valida.priceProduct = true;
              this.CleanForm();
              idTemp = product.id;
              arrayTemp.push(idTemp);
              this.ShowMessage('Producto agregado satisfactoriamente', 'success');

       }

       DeleteProduct(element) {
              const varTemp = document.getElementById(element.id).id;
              element.parentElement.parentElement.parentElement.remove();
              this.ShowMessage('Producto eliminado', 'warning');

              //eliminamos elemento de array
              for (let i in arrayTemp) {
                     if (arrayTemp[i] === varTemp) {
                            arrayTemp.splice(i, 1);
                     }
              }
       }

       ShowMessage(message, cssClass) {
              //creamos elemento SPAN
              const span = document.createElement('span');
              span.className = `col-md-12 text-center alert alert-${cssClass}`;
              span.appendChild(document.createTextNode(message));
              //mostramos elemento SPAN
              const show = document.querySelector('.showMessages');
              show.appendChild(span);
              setTimeout(() => {
                     span.className = '';
                     span.innerHTML = '';
              }, 2000);
       }
}

//Creamos objeto booleano VALIDACIONES
const valida = {
       nameProduct: false,
       priceProduct: false,
       yearProduct: true

};

const validarForm = (e) => {
       switch (e.target.name) {
              case "nameProduct":
                     valida.nameProduct = true;
                     break;
              case "priceProduct":
                     valida.priceProduct = true;
                     break;
              case "yearProduct":
                     valida.yearProduct = true;
                     break;
       }
};

//DOM EVENTS
document.getElementById('form').addEventListener('submit', function (e) {
       const name = document.getElementById('nameProduct').value;
       const price = document.getElementById('priceProduct').value;
       const year = document.getElementById('yearProduct').value;
       const id = name + price + year;
       const product1 = new Product(name, price, year, id);

       const interfaz = new Interfaz();
       if (name !== '' && price !== '' && year !== '') {
              valida.nameProduct = true;
              valida.priceProduct = true;
              valida.yearProduct = true;
              if (arrayTemp == '') {
                     interfaz.AddProduct(product1);
              } else {
                     if (arrayTemp.includes(id)) {
                            interfaz.ShowMessage('Error. Producto existente en nuestra Base de Datos', 'danger');
                     } else {
                            interfaz.AddProduct(product1);
                     }
              }

       } else {
              interfaz.ShowMessage('No puede haber campos vacíos', 'danger');
       }
       e.preventDefault();
});

document.getElementById('productList').addEventListener('click', function (e) {
       const interfaz = new Interfaz();
       interfaz.DeleteProduct(e.target)
});
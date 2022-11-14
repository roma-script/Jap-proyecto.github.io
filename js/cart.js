let user_id = "25801";
var cartResult = [];
var shippingPercentage = [];
let PERCENTAGE_SYMBOL = '%';
let DOLLAR_SYMBOL = "USD ";
let cartUser = "";


document.addEventListener("DOMContentLoaded", function(e){
    var emailInput= localStorage.getItem("dataLogin");

    if (!emailInput) {
        window.location = "index.html"
        
          
}
})
//Elimina artículo del carrito
function eliminar(name) {
    let index;
    cartUser.forEach(article => {
        if (article.name === name) {
            index = cartUser.indexOf(article)
            document.getElementById("row" + index).remove()
            cartUser.splice(index, index)
            update();
        }

    })
}


//Añade artículo desde página de información sobre el producto

function addToCart() {
    if (localStorage.getItem("newToCart") !== undefined) {
        cartResult.push(JSON.parse(localStorage.getItem("newToCart"))
        );
    }
}
//Muestra objeto/os del carrito
function showCart() {
    htmlContentToAppend = "";
    cartUser = JSON.parse(localStorage.getItem("userCart"));

    for (let i = 0; i < cartUser.length; i++) {

        htmlContentToAppend += `
            <tr id="row`+ i + `">
                <td>  <img  src="`+ cartUser[i].image + `  " height="50" ></img>    </td>
                <td>   ` + cartUser[i].name + `  </td>
                <td>  <input type="number" class="form-control" id="`+ cartUser[i].id +
            `" placeholder=" " required value="` + cartUser[i].count + `" min="1"  onchange="update()" >    </td>
                <td>`+ cartUser[i].currency + ` ` + parseInt(cartUser[i].unitCost) + `</td>
                <td style="font-weight:bold"; id="subtotal`+ [i + 1] + `">   </td>
                <td> <button type="button" value="delete"  class="btn btn-link" onclick= "eliminar('`+ cartUser[i].name + `')" > 
                <span class="bi bi-trash" style="font-size: 20px"></span> </button> </td>
                </tr>`


    }

    document.getElementById("showProducts").innerHTML = htmlContentToAppend;
   

    update();

};
//Cambia las variables cuando se selecciona tipo de envío y cantidad de artículo
function update() {
  
    var subtotalProduct = 0;

    for (let i = 0; i < cartUser.length; i++) {

        // Calcula lo que se verá en el carrito en la sección subtotal
        var unitCost = cartUser[i].unitCost;
        var cantidad = document.getElementById(cartUser[i].id).value;

        subtotalProduct = subtotalProduct + (cantidad * unitCost)


        document.getElementById("subtotal" + [i + 1]).innerHTML = "USD" + " " + (cantidad * unitCost)

    }


    //Calcula lo que se ve abajo(subtotal, envío y total)


    let subtotalHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostTextHTML = document.getElementById("totalCostText");

    let comissionToShow = "USD" + " " + Math.round(shippingPercentage * subtotalProduct);
    let subtotalToShow = "USD" + " " + subtotalProduct;
    let totalCostTextToShow = "USD" + " " + ((shippingPercentage * (subtotalProduct)) + (subtotalProduct));


    comissionCostHTML.innerHTML = comissionToShow;
    subtotalHTML.innerHTML = subtotalToShow;
    totalCostTextHTML.innerHTML = totalCostTextToShow;

}



document.addEventListener("DOMContentLoaded", function (e) {
    showCart()

});
/*         
getJSONData(CART_INFO_URL+user_id+EXT_TYPE).then(function (resultCart) {
   if (resultCart.status === "ok") {

       cartResult = resultCart.data;
     

       showCart()

     
   }})
   */

/* getJSONData(CART_BUY_URL).then(function (resultMess) {
     if (resultMess.status === "ok") {

         mensajeCompra = resultMess.data;
      
     }
 });

*/

//Cmbian el valor del tipo de envío según selección del radio
document.getElementById("goldradio").addEventListener("change", function () {
    shippingPercentage = 0.15;
    update();

});

document.getElementById("premiumradio").addEventListener("change", function () {
    shippingPercentage = 0.07;
    update();

});

document.getElementById("standardradio").addEventListener("change", function () {
    shippingPercentage = 0.05;
    update();
});

//Valida los campos

function validateForm() {

    const form = document.getElementById("datosUsuario");
    const calle = document.getElementById("envioCalle");
    const numero = document.getElementById("envioNumero");
    const esquina = document.getElementById("envioEsquina");
    const tarjeta = document.getElementById("numeroTarjeta");
    const codigo = document.getElementById("codSeguridad");
    const vencimiento = document.getElementById("vencimientoTarj");
    const cuenta = document.getElementById("numCuenta");
    form.classList.add('was-validated');

    calle.value = calle.value.trim();
    numero.value = numero.value.trim();
    esquina.value = esquina.value.trim();
    tarjeta.value = tarjeta.value.trim();
    codigo.value = codigo.value.trim();
    vencimiento.value = vencimiento.value.trim();
    cuenta.value = cuenta.value.trim();

    const calleValue = calle.value.trim();
    const numeroValue = numero.value.trim();
    const esquinaValue = esquina.value.trim();
    const tarjetaValue = tarjeta.value.trim();
    const codigoValue = codigo.value.trim();
    const vencimientoValue = vencimiento.value.trim();
    const cuentaValue = cuenta.value.trim();

    const tipoPago = document.querySelector('input[name="publicationType"]:checked').id;
    tarjeta.removeAttribute('required');
    codigo.removeAttribute('required');
    vencimiento.removeAttribute('required');
    cuenta.removeAttribute('required');

    if (tipoPago === "tarjetaCred") {

        tarjeta.setAttribute('required', 'required');
        codigo.setAttribute('required', 'required');
        vencimiento.setAttribute('required', 'required');
        cuenta.setAttribute('readonly', true);

    } else if (tipoPago === "transferencia") {
        cuenta.setAttribute('required', 'required');
        tarjeta.setAttribute('readonly', true);
        codigo.setAttribute('readonly', true);
        vencimiento.setAttribute('readonly', true);
    }

    if (calleValue === '') {
        return false
    }
    else if (numeroValue === '') {
        return false;
    }
    else if (esquinaValue === '') {
        return false
    }


    if (tipoPago === "tarjetaCred") {


        if (tarjetaValue === '') {
            return false
        }
        else if (codigoValue === '') {
            return false;
        }
        else if (vencimientoValue === '') {
            return false
        }
    } else if (tipoPago === "transferencia") {
        if (cuentaValue === '') {
            return false
        }
    }
    form.submit();

    getJSONData(CART_BUY_URL).then(function (resultMess) {
        if (resultMess.status === "ok") {
            mensajeCompra = resultMess.data.msg;
            alert(mensajeCompra)
        }
    })
}
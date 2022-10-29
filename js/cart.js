let user_id = "25801";
var cartResult = [];
var shippingPercentage = [];
let PERCENTAGE_SYMBOL = '%';
let DOLLAR_SYMBOL = "USD ";
let cartUser = "";



function eliminar(name) {
    newArray = [];

    cartUser.forEach(article => {
        if (cartUser[i].name!== name) {
            newArray.push(article)
        }
    })

    cartUser = newArray;
    showCart();
};



function addToCart() {
    if (localStorage.getItem("newToCart") !== undefined) {
        console.log("ok")
        cartResult.push(JSON.parse(localStorage.getItem("newToCart"))
        );
    } 
} 

function showCart() {
        htmlContentToAppend = "";
    cartUser = JSON.parse(localStorage.getItem("userCart"));
    console.log (cartUser[0])
        for (let i = 0; i < cartUser.length; i++) {
    
            htmlContentToAppend += `
            <tr>
                <td>  <img  src="`+ cartUser[i].image + `  " height="50" ></img>    </td>
                <td>   ` + cartUser[i].name + `  </td>
                <td>  <input type="number" class="form-control" id="`+ cartUser[i].id + 
                `" placeholder=" " required="" value="` + cartUser[i].count + `" min="0" onchange="update()" >    </td>
                <td>`+ cartUser[i].currency + ` ` +  parseInt(cartUser[i].unitCost) + `</td>
                <td style="font-weight:bold"; id="subtotal`+ [i + 1] + `">   </td>
                <td> <button type="button" value="delete"  class="btn btn-link" onclick= "eliminar('`+ cartUser[i].name + `')" > 
                <span class="bi bi-trash" style="font-size: 20px"></span> </button> </td>
                </tr>`
                

        }
        
        document.getElementById("showProducts").innerHTML = htmlContentToAppend;   
        console.log("ok");
       
        update();
        
    };
    
    function update() { 
     
var subtotalProduct = 0;

        for (let i = 0; i < cartUser.length; i++) {
            
            // Calcula lo que se verá en el carrito en la sección subtotal
            var unitCost = cartUser[i].unitCost;
            var cantidad = document.getElementById(cartUser[i].id).value;
    
            subtotalProduct = subtotalProduct + (cantidad * unitCost)
            console.log ("ok")
           
            document.getElementById("subtotal" + [i + 1]).innerHTML =  "USD" + " " + (cantidad * unitCost)
   
            }
        

   //Calcula lo que se ve abajo(subtotal, envío y total)
   const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
   })

   let unitProductCostHTML = document.getElementById("productCostText");
   let comissionCostHTML = document.getElementById("comissionText");
   let totalCostTextHTML = document.getElementById("totalCostText");

   let comissionToShow =  "USD" + " " + shippingPercentage * subtotalProduct;
   let unitCostToShow =  "USD" + " " + subtotalProduct;
   let totalCostTextToShow =  "USD" + " " + ((shippingPercentage * (subtotalProduct)) + (subtotalProduct));

   comissionCostHTML.innerHTML = comissionToShow;
   unitProductCostHTML.innerHTML = unitCostToShow;
   totalCostTextHTML.innerHTML = totalCostTextToShow;

    }



    document.addEventListener("DOMContentLoaded", function(e){
        showCart()

    });
 /*         
getJSONData(CART_INFO_URL+user_id+EXT_TYPE).then(function (resultCart) {
    if (resultCart.status === "ok") {

        cartResult = resultCart.data;
      

        showCart()

      
    }})
    */

   getJSONData(CART_BUY_URL).then(function (resultCart) {
       if (resultCart.status === "ok") {

           mensajeCompra = resultCart.data;


       }
   });




    

   document.getElementById("goldradio").addEventListener("change", function () {
       shippingPercentage = 0.15;
       update();
       console.log(shippingPercentage)
   });

   document.getElementById("premiumradio").addEventListener("change", function () {
       shippingPercentage = 0.07;
       update();

   });

   document.getElementById("standardradio").addEventListener("change", function () {
       shippingPercentage = 0.05;
       update();
   });

  function validateForm() {
 
const form = document.getElementById("datosUsuario");
const calle = document.getElementById("envioCalle");
const numero = document.getElementById("envioNumero");
const esquina = document.getElementById("envioEsquina");
const tarjeta =  document.getElementById("numeroTarjeta");
const codigo =  document.getElementById("codSeguridad");
const vencimiento =  document.getElementById("vencimientoTarj");
const cuenta =  document.getElementById("numCuenta");
form.classList.add('was-validated');

calle.value = calle.value.trim();
numero.value = numero.value.trim();
esquina.value = esquina.value.trim();
tarjeta.value = tarjeta.value.trim();
codigo.value = codigo.value.trim();
vencimiento.value = vencimiento.value.trim();
cuenta.value = cuenta.value.trim();
    
const calleValue = calle.value.trim();
const numeroValue =numero.value.trim();
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
  
   tarjeta.setAttribute('required','required');
   codigo.setAttribute('required','required'); 
   vencimiento.setAttribute('required','required');

} else if (tipoPago === "transferencia") {
    cuenta.setAttribute('required','required');
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
form.submit ();
  }
function submitForm() {
    
   





}
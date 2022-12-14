const CATEGORIES_URL = "http://127.0.0.1:5500/cats/cat.json";
const PUBLISH_PRODUCT_URL = "http://127.0.0.1:5500/sell/publish.json";
const PRODUCTS_URL = "http://127.0.0.1:5500/cats_products/";
const PRODUCT_INFO_URL = "http://127.0.0.1:5500/products/";
const PRODUCT_INFO_COMMENTS_URL = "http://127.0.0.1:5500//products_comments/";
const CART_INFO_URL = "http://127.0.0.1:5500//user_cart/";
const CART_BUY_URL = "http://127.0.0.1:5500//cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  if (
    document.getElementById("spinner-wrapper") 
  ){
    document.getElementById("spinner-wrapper").style.display = "block";
  }}

let hideSpinner = function() {
if ( 
  document.getElementById("spinner-wrapper") 
){
  document.getElementById("spinner-wrapper").style.display = "none";
}
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
document.addEventListener("DOMContentLoaded", function(e){
});

var loginUser= localStorage.getItem("dataLogin");
document.getElementById("botonUser").innerHTML = loginUser;


  
function cerrarSesion() {
 
  alert("Sesión cerrada con éxito");
  localStorage.removeItem("dataLogin")
  window.location.href = "login.html";
}

 


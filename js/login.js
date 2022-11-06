let user_id = "25801";

document.addEventListener("DOMContentLoaded", function(e){


    
});
//Dato usuario
function DataLogin() {
  var DataLogin = [];
}


document.getElementById("login-form-submit").addEventListener("click",
 

//Redirige y guarda el carrito en el perfil
function redirigir() {
  var usuario = document.getElementById("usuario").value;
     var contraseña = document.getElementById('contraseña').value;
     localStorage.setItem("dataLogin", usuario);
     console.log ((CART_INFO_URL+user_id+EXT_TYPE))
  getJSONData(CART_INFO_URL+user_id+EXT_TYPE).then(function (resultCart)
     {
      if (resultCart.status === "ok") {
        localStorage.setItem("userCart", JSON.stringify(resultCart.data.articles));
     
        
  
         console.log(resultCart.data);
  
        
      }})
   // Validar usuario
   if (usuario === "") { 
     alert("Debes ingresar un usuario");
     return false;
   } else if (contraseña === "") {
     alert("Debes ingresar una contraseña");
     return false;
   } else if (contraseña.length < 7) {
     alert("La contraseña debe tener más de 6 caracteres")
     return false;
   }   else {
   alert("Usuario creado con éxito");
   window.location.href = "inicio.html";
   return false;
  }
});


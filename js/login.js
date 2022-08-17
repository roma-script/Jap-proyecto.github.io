document.getElementById("login-form-submit").addEventListener("click",
  
function redirigir() {
  var usuario = document.getElementById("usuario").value;
     var contraseña = document.getElementById('contraseña').value;
    
   // Validar usuario
   if (usuario === "") {
     alert("Debes ingresar un usuario");
     return false;
   } else if (contraseña === "") {
     alert("Debes ingresar una contraseña");
     return false;
   } else if (contraseña.length < 6) {
     alert("La contraseña debe tener más de 6 caracteres")
     return false;
   }
   else{
   alert("Usuario creado con éxito")
   window.location.href = "inicio.html";
  }
}
);
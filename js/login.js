document.addEventListener("DOMContentLoaded", function(e){

});
    
function DataLogin() {
  var DataLogin = [];
}

function validar() {

  // Obtener valores 
  var email = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;
  localStorage.setItem("login-form-submit", email);

  // Validacion
  if (email === "") {
    alert("Debes ingresar un usuario");
    return false;
  }

  else if (contraseña === "") {
    alert("Debes ingresar una contraseña");
    return false;
  }

  else if (contraseña.length < 6) {
    alert("La contraseña debe tener más de 6 caracteres")
    return false;
  }

  else {
    alert("Usuario creado con exito");
  }
}
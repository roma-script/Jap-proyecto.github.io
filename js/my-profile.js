document.addEventListener("DOMContentLoaded", function (e) {

   
    mostrarDatos();

    
});

var emailInput= localStorage.getItem("dataLogin");
document.getElementById("userEmail").value = emailInput;


function reemplazarFoto() {

var foto = document.getElementById("imagenPerfil");
var reemplazo =  document.getElementById("newProfilePic");


}

function guardarCambios() {

  // Obtener datos
 
    const form = document.getElementById("formularioPerfil");
    const primerNombre = document.getElementById("primerNombre");
    const primerApellido = document.getElementById("primerApellido");
    const userEmail = document.getElementById("userEmail");
    const alert1 = document.getElementById("nombreAlert");
    const alert2 = document.getElementById("apellidoAlert");
    const alert3 = document.getElementById("emailAlert");


    
    var user = {

        primerNombre: primerNombre.value,
        segundoNombre: segundoNombre.value,
        primerApellido: primerApellido.value,
        segundoApellido: segundoApellido.value,
        userEmail: userEmail.value,
        telefono: telefono.value,

    };
    primerNombre.value.trim();
    primerApellido.value.trim();
    userEmail.value.trim();

   // Validar
    if (primerNombre.value === "") {
      alert1.style.visibility = "visible";
      
    } 
    if (primerApellido.value === "") {
        alert2.style.visibility = "visible";
        
    }
    if (userEmail.value === "") {
        alert3.style.visibility = "visible";
    }
    else {
       
        localStorage.setItem("myProfile", JSON.stringify(user));

        var perfil = JSON.parse(localStorage.getItem("myProfile"));
    
        document.getElementById("userEmail").value = perfil.userEmail;

}}


function mostrarDatos() {

    var perfil = JSON.parse(localStorage.getItem("myProfile"));
      
      // Poner info en el perfil
    document.getElementById("primerNombre").innerHTML = perfil.primerNombre;
    document.getElementById("segundoNombre").innerHTML = perfil.segundoNombre;
    document.getElementById("primerApellido").innerHTML = perfil.primerApellido;
    document.getElementById("segundoApellido").innerHTML = perfil.segundoApellido;
    document.getElementById("userEmail").innerHTML =  perfil.userEmail;
    document.getElementById("telefono").innerHTML = perfil.telefono;
    
    
    
}


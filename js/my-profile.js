document.addEventListener("DOMContentLoaded", function (e) {

   
    mostarDatos();

    
});

var emailInput= localStorage.getItem("dataLogin");
document.getElementById("userEmail").value = emailInput;


function reemplazarFoto() {

}




function mostarDatos() {

    var perfil = JSON.parse(localStorage.getItem("myProfile"));
    if (document.getElementById("usuario").value != null) {
        document.getElementById("usuario").value = localStorage.getItem("dataLogin");
        document.getElementById("profilePic").innerHTML = localStorage.getItem("Foto");
        

    
}}






  // Obtener info perfil
    document.getElementById("primerNombre").value = perfil.primerNombre;
    document.getElementById("segundoNombre").value = perfil.segundoNombre;
    document.getElementById("primerApellido").value = perfil.primerApellido;
    document.getElementById("segundoApellido").value = perfil.segundoApellido;
    document.getElementById("userEmail").value = perfil.userEmail;
    document.getElementById("telefono").value = perfil.telefono;


    // Poner info en el perfil
    document.getElementById("primerNombre").innerHTML = perfil.primerNombre;
    document.getElementById("segundoNombre").innerHTML = perfil.segundoNombre;
    document.getElementById("primerApellido").innerHTML = perfil.primerApellido;
    document.getElementById("segundoApellido").innerHTML = perfil.segundoApellido;
    document.getElementById("userEmail").innerHTML =  perfil.userEmail;
    document.getElementById("telefono").innerHTML = perfil.telefono;
    
    



function guardarCambios() {


    var user = {

        primerNombre: primerNombre.value,
        segundoNombre: segundoNombre.value,
        primerApellido: primerApellido.value,
        segundoApellido: segundoApellido.value,
        userEmail: userEmail.value,
        telefono: telefono.value,

    };

    localStorage.setItem("myProfile", JSON.stringify(user));

    var perfil = JSON.parse(localStorage.getItem("myProfile"));

    document.getElementById("userEmail").value = perfil.userEmail;

 
 
    if (primerNombre === '') {
        return false
    }
    else if (primerApellido === '') {
        return false;
    }
    else if (Email === '') {
        return false
    }

}

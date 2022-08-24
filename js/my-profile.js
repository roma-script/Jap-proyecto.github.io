document.addEventListener("DOMContentLoaded", function (e) {

   
    mostarDatos();


});


function mostarDatos() {

  


    var perfil = JSON.parse(localStorage.getItem("myProfile"));


    if (document.getElementById("usuario").value != null) {
        

        document.getElementById("usuario").value = localStorage.getItem("botonUser");
        

    }
}

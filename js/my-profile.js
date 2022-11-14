document.addEventListener("DOMContentLoaded", function (e) {

   
    mostrarDatos();

    
});


var emailInput= localStorage.getItem("dataLogin");
document.getElementById("userEmail").value = emailInput;



    if (!emailInput) {
      window.location = "index.html"
      
        }




function reemplazarFoto() {
const input = document.getElementById("newProfilePic");
const textArea = document.getElementById("imagenPerfil");

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    textArea.innerText = base64;
};

input.addEventListener("change", (e) => {
    uploadImage(e);
});
    var reemplazo = "";

    if (localStorage.getItem("Foto") == null){ 
    

    var profilePic = document.getElementById("newProfilePic").file[0];

    reemplazo = `<div id="imagenPerfil"> ` + profilePic + ` " alt="" border="0" heigth="200px" width="200px"></div>`

    localStorage.setItem("Foto", reemplazo);

    htmlContentToAppend += ` <div id="imagenPerfil"> ` + profilePic + ` " alt="" border="0" heigth="200px" width="200px"></div>`

  
}}


function guardarCambios() {

  // Obtener datos
 
    const form = document.getElementById("formularioPerfil");
    const primerNombre = document.getElementById("primerNombre");
    const primerApellido = document.getElementById("primerApellido");
    const userEmail = document.getElementById("userEmail");
    const alert1 = document.getElementById("nombreAlert");
    const alert2 = document.getElementById("apellidoAlert");
    const alert3 = document.getElementById("emailAlert");
    const Foto = document.getElementById("newProfilePic");


    
    var user = {

        primerNombre: primerNombre.value,
        segundoNombre: segundoNombre.value,
        primerApellido: primerApellido.value,
        segundoApellido: segundoApellido.value,
        userEmail: userEmail.value,
        telefono: telefono.value,
        foto: Foto.value,

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


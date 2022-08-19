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
   } else if (contraseña.length < 7) {
     alert("La contraseña debe tener más de 6 caracteres")
     return false;
   }   else {
   alert("Usuario creado con éxito");
   window.location.href = "inicio.html";
  }
});

/*
const form = document.forms['was-validated'];
form.addEventListener('submit', functionhandleFormSubmit(e) {
  e.preventDefault();

  const usuario = form['usuario'].value;
  const contraseña = form['contraseña'].value;
  const submit =document.getElementById('login-form-submit').value;

  if (isLoginOrSignup === 'isLogin') {
    return loginUser(usuario, contraseña);
  }

  return createUser(usuario, contraseña);

  functioncreateUser(usuario, contraseña) {
    console.log('Creando el usuario con email ' + usuario);
  
    firebase.auth().createUserWithEmailAndPassword(usuario, contraseña)
    .then(function (user) {
      console.log('¡Creamos al usuario!');
    })
    .catch(function (error) {
      console.error(error)
    });
  }
  
  functionloginUser(usuario, contraseña) {
    console.log('Loging user ' + usuario);
  
    firebase.auth().signInWithEmailAndPassword(usuario, contraseña)
    .then(function (user) {
      console.log('Credenciales correctas, ¡bienvenido!');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  functionsignoutUser() {
    firebase.auth().signOut();
  }
});
*/




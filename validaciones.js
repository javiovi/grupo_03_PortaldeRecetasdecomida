document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let warnings = "";
      let regexEmail = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      let entrar = false;
      parrafo.innerHTML = "";
  
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const nombreUsuario = document.getElementById("nombreUsuarioInput");
      const ciudad = document.getElementById("ciudad");
      const algoSobreVos = document.getElementById("algoSobreVos");
  
      if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`;
        entrar = true;
      }
      if (password.value.length < 8) {
        warnings += `La contraseña no es válida <br>`;
        entrar = true;
      }
      if (nombre.value.length < 3) {
        warnings += `El nombre no es válido <br>`;
        entrar = true;
      }
      if (apellido.value.length < 3) {
        warnings += `El apellido no es válido <br>`;
        entrar = true;
      }
      if (nombreUsuario.value.length < 3) {
        warnings += `El nombre de usuario no es válido <br>`;
        entrar = true;
      }
      if (ciudad.value.length < 3) {
        warnings += `El nombre de la ciudad no es válido <br>`;
        entrar = true;
      }
      if (algoSobreVos.value.length < 20) {
        warnings += `Ingresa algo sobre vos <br>`;
        entrar = true;
      }
  
      if (entrar) {
        parrafo.innerHTML = warnings;
      } else {
        parrafo.innerHTML = "Enviado";
      }
    });
  });
  
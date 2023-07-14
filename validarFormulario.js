function validateForm() {
    // Obtenemos los valores deL HTML
    var nombre = document.getElementById("ObtenerNombre").value;
    var apellido = document.getElementById("ObtenerApellido").value;
    var email = document.getElementById("Email").value;
    var telefono = document.getElementById("Celular").value;

    // Defino Variables
    var isValid = true;
    var errorNombre = document.getElementById("errorNombre");
    var errorApellido = document.getElementById("errorApellido");
    var errorEmail = document.getElementById("errorEmail");
    var errorTelefono = document.getElementById("errorTelefono");

    // Validación  nombre
    if (nombre === "") {
      errorNombre.innerHTML = "Por favor, ingresa tu nombre";
      isValid = false;
    } else {
      errorNombre.innerHTML = "";
    }

    // Validaciónapellido
    if (apellido === "") {
      errorApellido.innerHTML = "Por favor, ingresa tu apellido";
      isValid = false;
    } else {
      errorApellido.innerHTML = "";
    }

    // Validación email
    if (email === "") {
      errorEmail.innerHTML = "Por favor, ingresa tu email";
      isValid = false;
    } else {
      errorEmail.innerHTML = "";
    }

    // Validación  teléfono
    if (telefono === "") {
      errorTelefono.innerHTML = "Por favor, ingresa tu teléfono";
      isValid = false;
    } else {
      errorTelefono.innerHTML = "";
    }

    return isValid;
  }
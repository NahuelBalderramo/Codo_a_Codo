var ObtenerNombre = document.getElementById('ObtenerNombre')
var ObtenerApellido = document.getElementById('ObtenerApellido')
var email = document.getElementById('email')
var Celular = document.getElementById('Celular')
var error = document.getElementById('error')
error.style.color = 'red'

function enviarForm() {
    console.log('El formulario esta siendo enviado...');
    var mensajeDeError = []

    if (ObtenerNombre.value === null || nombre.value === '') {
        mensajeDeError.push('Ingresa tu nombre')    
    }
    if (ObtenerApellido === null || nombre.value === '') {
        mensajeDeError.push('Ingresa tu apellido')    
    }
    if (email === null || nombre.value === '') {
        mensajeDeError.push('Ingresa tu mail')    
    }
    if (Celular === null || nombre.value === '') {
        mensajeDeError.push('Ingresa tu celular')    
    }

    error.innerHTML = mensajeDeError.join(', ')
    stop
    return false;
    
}
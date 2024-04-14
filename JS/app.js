document.getElementById('formulario').addEventListener('submit', (e) => {
    let con1 = document.getElementById('contraseña1')
    let con2 = document.getElementById('contraseña2')
    if (con1.value != con2.value) {
        alert('las contraseñas deben ser iguales')
        e.preventDefault()
        return false
    } else
        return true
})
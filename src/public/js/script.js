const elementosForm = document.getElementById ("formData");

elementosForm.addEventListener("submit", (event) => {
    event.preventDefault ();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let elementosForm = {nombre:nombre, email:email, mensaje:mensaje}
    let elementosFormJSON = JSON.stringify(elementosForm);
    console.log(elementosFormJSON)
    //Guardar en el servidor
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: elementosFormJSON
    })
})


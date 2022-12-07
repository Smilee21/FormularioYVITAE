const elementosForm = document.getElementById ("formData");

elementosForm.addEventListener("submit", (event) => {
    event.preventDefault ();
    let fecha =new Date();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let elementosForm = {fecha: fecha, nombre:nombre, email:email, mensaje:mensaje}
    let elementosFormJSON = JSON.stringify(elementosForm);
    
    console.log(elementosFormJSON);
    //Guardar en el servidor
    fetch(`http://localhost:`, PORT `/contact`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: elementosFormJSON,
        
    });

})

//Almacena el boton del logout
let buttonLogOut=document.getElementById('btnLogOut');
document.addEventListener('DOMContentLoaded', (event) => {
    //Dirige al home
    document.getElementById('form-register').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        window.location.href = './pages/home.html'; // Redirige a home.html
    });
    //Redirige para el login
    buttonLogOut.addEventListener('click',()=>{
        window.location.href="../index.html";
    });
});
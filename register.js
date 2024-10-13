//Almacena el boton del logout
let buttonLogOut=document.getElementById('btnLogOut');
document.addEventListener('DOMContentLoaded', (event) => {    
    //Toma los valores de los input
    let nombre=document.getElementById('txtNombre'); 
    let apellido=document.getElementById('txtApellido');
    let mail=document.getElementById('txtEmail');
    let clave=document.getElementById('txtClave');
    let fecha=document.getElementById('txtFecha');    
    //Pasa los parametros para el registro y redirige al login
    Registro(mail.textContent,nombre.textContent,apellido.textContent,clave.textContent,fecha.textContent);    
});

const Registro= (mail,nombre,apellido,contraseña,fecha)=>{
    //Dirige al home
    document.getElementById('form-register').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:mail,
                    username:nombre +" "+ apellido,
                    password:contraseña,
                    name:{
                        firstname:nombre,
                        lastname:apellido
                    },                   
                    fechaNacimiento:fecha
                }
            )
        })
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                alert('Sesión iniciada correctamente.');
                window.location.href = './pages/home.html'; // Redirige a home.html
            });
    });
};
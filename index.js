window.addEventListener('load',()=>{
    Login();
})
// Función de Login
const Login = () => {
    let btnLogin = document.getElementById('Redirect');
    btnLogin.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario

        // Obtén los valores de los inputs
        const email = document.getElementById('logEmail').value;
        const clave = document.getElementById('logClave').value;

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: clave
            })
        })
        .then(res => res.json())
        .then(json => {           
            // Verifica si el token existe en la respuesta
            if (json.token) {
                // Guarda el token en sessionStorage
                sessionStorage.setItem('token', json.token);
                // Redirige a otra página
                window.location.href = './pages/home.html'; //
            } else {
                alert('Login fallido. Verifica tus credenciales.');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            alert('Usuario o contraseña incorrectos.');
        });
    });
};
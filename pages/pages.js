//Imports
import { cartCardComponent } from "../components/cardsCart.js";
import { footerComponent } from "../components/footer.js";
import { cardComponent } from "../components/cards.js";
import { navBoots } from "../components/navbar.js";

/* Vincula la variable con el contenedor */
let footContainer=document.querySelector('.pie');
let navContainer = document.querySelector('.head');
let cardContainer=document.querySelector('.container');
let cardsCartContainer=document.querySelector('.cont-cart');
/* Cuando carga el documento inserta el codigo */
window.addEventListener('load',()=>{
    //verifica e Inserta los codigos html cuando carga el DOM
    //Si existen los containers inserta el codigo
    if(navContainer)
    {
        navContainer.innerHTML=navBoots;
    };
    if(footContainer)
    {   
        footContainer.innerHTML=footerComponent; 
    };    
    if(cardsCartContainer)
    {
        cardsCartContainer.innerHTML=cartCardComponent;
    };   
    
    // Obtener los datos del JSON
    fetch('../Datos/productos.json')
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Error al cargar los productos');
            }
            return resp.json();
        })
        .then(prod => {
            let productosFiltrados = []; 
            let categoriaActual = '';

            // Lógica para obtener la categoría
            switch (document.title.replace('Tienda/', '').trim()) {
                case 'Home':
                    categoriaActual = 'Home';
                    break;
                case 'Calzado':
                    categoriaActual = 'calzado';
                    break;
                case 'Indumentaria':
                    categoriaActual = 'indumentaria';
                    break;
                case 'Accesorios':
                    categoriaActual = 'accesorios';
                    break;                
            }

            // Filtrar productos
            if (categoriaActual !== 'Home') {
                productosFiltrados = prod.filter(producto => producto.categoria === categoriaActual);
            } else {
                const Calzado = prod.filter(producto => producto.categoria === 'calzado');
                const Accesorios = prod.filter(producto => producto.categoria === 'accesorios');
                const Indumentaria = prod.filter(producto => producto.categoria === 'indumentaria');

                let calselecc = obtenerProductosAleatorios(Calzado, 3);
                let Accselecc = obtenerProductosAleatorios(Accesorios, 3);
                let Indselecc = obtenerProductosAleatorios(Indumentaria, 3);

                productosFiltrados = calselecc.concat(Accselecc, Indselecc);
            }

            // Actualiza el contenedor de las cards
            if (cardContainer) {
                cardContainer.innerHTML = cardComponent(productosFiltrados);
                agregarEventosBotones();
            }
        })
});
//Funcion que genera numeros aleatorios para mostrar las cards
function obtenerProductosAleatorios(array, cantidad) {
    const productosAleatorios = [];
    const usados = new Set(); // Para evitar duplicados
    
    while (productosAleatorios.length < cantidad && productosAleatorios.length < array.length) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        //Verifica si el indice existe
        if (!usados.has(indiceAleatorio)) {
            usados.add(indiceAleatorio);
            productosAleatorios.push(array[indiceAleatorio]);
        }
    }
    //Devuelve array con los id
    return productosAleatorios;
}

// Función para agregar eventos a los botones
function agregarEventosBotones() {
    let btnAdd = document.querySelectorAll('.btn-add');
    btnAdd.forEach(btnE => {
        btnE.addEventListener('click', () => {
            let cant = btnE.previousElementSibling;
            if (cant && cant.classList.contains('cant')) {
                let cantidad = parseInt(cant.textContent, 10);
                cantidad += 1;
                cant.textContent = cantidad.toString();
            }
        });
    });

    let btnQuit = document.querySelectorAll('.btn-quit');
    btnQuit.forEach(btnE => {
        btnE.addEventListener('click', () => {
            let cant = btnE.nextElementSibling;
            if (cant && cant.classList.contains('cant') && cant.textContent > 1) {
                let cantidad = parseInt(cant.textContent, 10);
                cantidad -= 1;
                cant.textContent = cantidad.toString();
            }
        });
    });
}


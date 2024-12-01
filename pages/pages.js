//Imports
import { footerComponent } from "../components/footer.js";
import { cardComponent } from "../components/cards.js";
import { navBoots } from "../components/navbar.js";
import {setupCartButtons} from "./Carrito/carrito.js"
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
    //Lista los productos en las paginas
    listraProductos();
    //Cierra Sesion
    cerrarSesion();           
});
//Funcion para listar los productos en las paginas
function listraProductos() {
    // Obtener los datos del JSON
    fetch('http://127.0.0.1:5503/Datos/productos.json')
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
            };
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
            };

            // Actualiza el contenedor de las cards
            if (cardContainer) {
                cardContainer.innerHTML = cardComponent(productosFiltrados);
                agregarEventosBotones();
                //Funcion que muestra las imagenes de los productos
                ModalCarrusel();
            };           
            // Busca las tarjetas dentro del contenedor
            
            if(cardsCartContainer)
            {
                const cardElements = cardsCartContainer.querySelectorAll('.card-cart');
                if(cardElements.length >0)
                {
                    agregarEventosBotones();                    
                };                              
            };
            
        });
};
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
};
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
    //Funcion de añadir al carrito
    setupCartButtons();
};
function cerrarSesion() {
    let btnLogOut= document.getElementById('btnLogOut');
    btnLogOut.addEventListener('click',()=>{
        // Elimina el token del sessionStorage
        sessionStorage.removeItem('token');
    });
};
//Selecciona la card que se hizo click
function ModalCarrusel (){
    //Selecciona todas las cards
    let cardIMG= document.querySelectorAll('.imgModal');
    cardIMG.forEach(e =>{
        //Cuando haces click muestra el modal
        e.addEventListener('click',()=>{            
            //Selecciona el elemento "card" mas cercano
            const card = e.closest('.card');
            //Crea un item producto
            const producto = {
                id: card.getAttribute('data-id'),
                marca: card.querySelector('h3').textContent,
                img: card.querySelector('img').src,
                descripcion: card.querySelector('.desc p').textContent,
                precio: card.querySelector('.price').textContent,
                cantidad: parseInt(card.querySelector('.cant').textContent) //pasa la cantidad a numero
            };
            console.log(producto);
            // Fetch para obtener los datos del JSON
            fetch('http://127.0.0.1:5503/Datos/productos.json')
            .then(response => response.json())
            .then(data => {
                // Filtra el producto por id
                const productoEncontrado = data.find(item => String(item.id) === String(producto.id));
                if (productoEncontrado) {
                    // Aquí puedes abrir el modal y mostrar la información
                    mostrarModal(productoEncontrado);
                } else {
                    console.error('Producto no encontrado');
                };
            })
            .catch(error => console.error('Error al cargar los productos:', error));            
        });
    });
};
//Crea el modal y lo muestra en pantalla
function mostrarModal(producto) {    
    // Declara modalHTML y crea el contenido HTML del modal
    const modalHTML = `
        <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="miModalLabel">${producto.marca}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">                      
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${producto.img}" class="d-block w-100" alt="${producto.descripcion}">
                                </div>                                
                                ${producto.imagenes.map((img)=>{
                                    return`
                                        <div class="carousel-item">
                                            <img src="${img}" class="d-block w-100" alt="${producto.descripcion}">
                                        </div>
                                    `
                                }).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <p>${producto.descripcion}</p>
                        <p>Precio: $${producto.precio}</p>                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Inserta el modal en el DOM
    let containerModal = document.querySelector('.modalContainer');
    containerModal.innerHTML = modalHTML;

    // Muestra el modal
    const modal = new bootstrap.Modal(document.getElementById('miModal'));
    modal.show();

    // Opcional: limpiar el modal del DOM después de cerrarlo
    document.getElementById('miModal').addEventListener('hidden.bs.modal', function () {
        this.remove();
    });    
};


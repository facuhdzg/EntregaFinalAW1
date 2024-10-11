import { getData, setData, deleteCollection } from "../../utils/storageController.js";
let containerCart=document.querySelector('.cont-cart');
window.addEventListener('load',()=>{   
    // Verifica si estamos en la página 'carrito.html'
    if (window.location.pathname.endsWith('carrito.html')) {           
        //Lista los productos del carrito
        const cardsHtml=listarCarrito();
        //Si existen productos en el carrito....
        if(cardsHtml.length > 0)
        {
            //Añade las funciones
            //inserta las cards                
            containerCart.innerHTML=cardsHtml;
            //Calcula el total del carrito
            calcTotal();
            //actualiza cantidad y precio
            actTotal();
            //Borra el producto que desee
            deleteProd();          
        }
        //Finaliza la compra
        comprar();               
    };
});
//Configura los botones para añadir al carrito
export const setupCartButtons = () => {
    //obtiene todos los botones
    let btnCart = document.querySelectorAll('.btn-cart');
    //Añade a todos los botones el evento click
    btnCart.forEach(e => {
        e.addEventListener('click', () => {            
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
            // Guardar en local storage            
            let productosEnCarrito=getData('productosEnCarrito');
            // Buscar si el producto ya existe
            const existingProductIndex = productosEnCarrito.findIndex(item => item.id === producto.id);
            //Si el producto ya existe en el carrito solo suma la cantidad
            if (existingProductIndex !== -1) {
                //Obtiene la cantidad del producto actual
                const currentQuantity = productosEnCarrito[existingProductIndex].cantidad;
                productosEnCarrito[existingProductIndex].cantidad = currentQuantity + producto.cantidad; // Suma las cantidades
            } else {
                // Si no existe añade al carrito
                productosEnCarrito.push(producto);
            };
            //Actualiza el array en el storage            
            setData('productosEnCarrito',productosEnCarrito);          
        });
    });
};
//Botones + y - Carrito
const actTotal = ()=>{
    let btnAdd= document.querySelectorAll('.btn-add');
    btnAdd.forEach((btnE)=>{
        btnE.addEventListener('click',()=>{
            //Selecciona el elemento "card" mas cercano
            const card = btnE.closest('.card-cart');
            //Obtiene el producto
            const producto={
                id: card.getAttribute('data-id'),
                marca: card.querySelector('h3').textContent,
                img: card.querySelector('img').src,
                descripcion: card.querySelector('.desc p').textContent,
                precio: card.querySelector('.price').textContent,
                cantidad: parseInt(card.querySelector('.cant').textContent) //pasa la cantidad a numero
            };            
            //Obtiene los productos en el carrito
            let productosEnCarrito=getData('productosEnCarrito');            
            // Buscar si el producto ya existe
            const existingProductIndex = productosEnCarrito.findIndex(item => item.id === producto.id);            
            if (existingProductIndex !== -1) {
                // Actualiza la cantidad del producto existente
                productosEnCarrito[existingProductIndex].cantidad += 1; // Incrementa en 1                
            };
            //Actualiza el array del storage
            setData('productosEnCarrito',productosEnCarrito);            
            //Actualiza la cantidad y calcula el total              
            calcTotal();
        });
    });

    let btnQuit= document.querySelectorAll('.btn-quit');
    btnQuit.forEach((btnE)=>{
        btnE.addEventListener('click',()=>{
            let cant = btnE.nextElementSibling;
            let cantidad = parseInt(cant.textContent);
            if(cantidad>1)
            {
                //Selecciona el elemento "card" mas cercano
                const card = btnE.closest('.card-cart');
                //Obtiene el producto
                const producto={
                    id: card.getAttribute('data-id'),
                    marca: card.querySelector('h3').textContent,
                    img: card.querySelector('img').src,
                    descripcion: card.querySelector('.desc p').textContent,
                    precio: card.querySelector('.price').textContent,
                    cantidad: parseInt(card.querySelector('.cant').textContent) //pasa la cantidad a numero
                }            
                //Obtiene los productos en el carrito
                let productosEnCarrito=getData('productosEnCarrito');                
                // Buscar si el producto ya existe
                const existingProductIndex = productosEnCarrito.findIndex(item => item.id === producto.id);                
                if (existingProductIndex !== -1) {
                    // Actualiza la cantidad del producto existente
                    productosEnCarrito[existingProductIndex].cantidad -= 1; // decrementa en 1                    
                }
                //Actualiza el array del storage
                setData('productosEnCarrito',productosEnCarrito);                
                //Actualiza la cantidad y calcula el total              
                calcTotal();
            };           
        });
    });
    
};
//Elimina un producto del carrito
const deleteProd=()=>{
    //Selecciona todos los botones delete
    let btnDelete=document.querySelectorAll('.btn-delete');
    btnDelete.forEach((btnD)=>{
        btnD.addEventListener('click',()=>{
            //Selecciona el elemento "card" mas cercano
            const card = btnD.closest('.card-cart');
            //obtiene el id de producto
            const idProd=card.getAttribute('data-id');            
            //Obtiene los productos en el carrito
            let productosEnCarrito=getData('productosEnCarrito');
            // Filtra los productos para eliminar el que coincide con el id
            productosEnCarrito = productosEnCarrito.filter(item => item.id !== idProd);
            // Actualiza el array en el storage
            setData('productosEnCarrito', productosEnCarrito);
            //Actualiza la interfaz            
            // Refresca la página
            location.reload(); 
        });
    });
};
//Finalizar compra
const comprar=()=>{
    let btnCompra=document.getElementById('btn-buy');
    const cart=getData('productosEnCarrito');    
    btnCompra.addEventListener('click',()=>{
        if(cart && cart.length > 0)
        {
            //Borra los productos del carro
            deleteCollection('productosEnCarrito');
            //Actualiza la interfaz            
            // Refresca la página
            alert('Gracias por su compra'); //Hacer con modal
            location.reload(); 
        }
        else
        {
            alert('El carrito está vacío'); //Hacer con modal
        };
        
    });      
};
//Cuando carga el carrito que muestre los productos en las cards
const listarCarrito= ()=>{
    //obtiene los productos
    const arrayProd=getData('productosEnCarrito');    
    if(arrayProd.length>0)
    {
        //Recorre los productos   
        const cards =arrayProd.map((item)=>{
        //Por cada producto devuelve una card
        return`
            <div class="card-cart" data-id="${item.id}">
            <h3>${item.marca}</h3>
            <img src="${item.img}" alt="${item.marca}">

            <div class="desc">
                <p>${item.descripcion}</p>
            </div>

            <div class="card-footer">
                <button class="btn-quit"><i class="bi bi-dash-square"></i></button>
                <p class="cant">${item.cantidad}</p>
                <button class="btn-add"><i class="bi bi-plus-square"></i></button>
                <p class="price">${item.precio}</p>
                <button class="btn-delete"><i class="bi bi-trash3"></i></button>
            </div>
            </div>
        `
        }).join('');
        //Devuelve el arreglo de cards
        return cards
    };      
};   
    
//Funficon para calcular el total cuando carga la pagina
const calcTotal= ()=>{
    let cartSubTot=document.getElementById('p-prod');
    let envio=document.getElementById('p-envio');
    let cartTot=document.getElementById('c-total');    
    //Obtiene los productos
    const prods= getData('productosEnCarrito');
    if(prods.length>0)
    {
        const total= prods.reduce((acc,item)=>{
            const precio = parseFloat(item.precio) || 0; 
            const cant = parseInt(item.cantidad) || 0;  
            return acc + (precio * cant); //Suma el subtotal al acumulador
        },0);//Comienza el acumulador en 0        
        cartSubTot.innerHTML='$'+ total;
        envio.innerHTML='$'+100;
        cartTot.innerHTML='$'+(total+parseInt(100));
    }          
};
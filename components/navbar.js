//Guarda la url y no importa donde este la pagina
const url='http://127.0.0.1:5503/';
//Const que guarda los links y titulos del panel
const panElement=[
    {title:'<i id="btnLogOut" class="bi bi-box-arrow-in-left"></i>',link:`../../index.html`},
    {title:'<i class="bi bi-cart3"></i>',link:`${url}pages/Carrito/carrito.html`}
];
/* Constante que almacena los links y titulos del navbar */
const navbarElements=[
    {title:'Home',link:`${url}pages/home.html`},
    {title:'Calzado',link:`${url}pages/calzado.html`},
    {title:'Indumentaria',link:`${url}pages/indumentaria.html`},
    {title:'Accesorios',link:`${url}pages/accesorios.html`}
];
/* Constante que contiene el codigo del navbar */
export const navBoots=`   
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">        
        <div class="container-fluid cart">            
            ${panElement.map((e)=>{
                return`                
                <a href="${e.link}">
                    ${e.title}
                </a>`                
            }).join('')}
        </div>       
        <div class="container-fluid nav">
            <a href="http://127.0.0.1:5503/pages/home.html" class="navbar-brand" ><img class="logo" src="../../assets/logo.webp" alt="Logo"></a>                     
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">                      
                <ul class="navbar-nav">                             
                    ${navbarElements.map((e)=>{
                        return`
                        <li class="nav-item">
                            <a class="nav-link" href="${e.link}">${e.title}</a>
                        </li>`
                    }).join('')}
                </ul>
            </div>
        </div>
    </nav>
`;



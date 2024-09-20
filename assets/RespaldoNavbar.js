//Guarda la url y no importa donde este la pagina
const url='http://127.0.0.1:5501/';
//Const que guarda los links y titulos del panel
const panElement=[
    {title:'<i id="btnLogOut" class="bi bi-box-arrow-in-left"></i>',link:`../index.html`},
    {title:'<i class="bi bi-cart3"></i>',link:`${url}pages/Carrito.html`}
];
/* Constante que almacena los links y titulos del navbar */
const navbarElements=[
    {title:'Home',link:`${url}pages/home.html`},
    {title:'Zapatillas',link:`${url}pages/zapatillas.html`},
    {title:'Indumentaria',link:`${url}pages/Indumentaria.html`},
    {title:'Accesorios',link:`${url}pages/Accesorios.html`}
];
/* Constante que contiene el codigo del navbar */
export const navBarComponent=`
    <div class="panel">           
        <ul class="pan-links">                
            ${panElement.map((e)=>{
                return`
                <li class="pan-item">
                <a href="${e.link}">
                    ${e.title}
                </a>
                </li>`
            }).join('')}
        </ul>
    </div>

    <Nav class="navbar">            
        <img src="../assets/logo.webp" alt="Logo">
        <ul class="nav-links">                
            ${navbarElements.map((e)=>{
                return`
                <li class="nav-item">
                    <a href="${e.link}">${e.title}</a>
                </li>`;
            }).join('')}           
        </ul>
    </Nav>
`;
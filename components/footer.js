/* Constante que almacena los links */
const footerlinks=[
    {nombre:`wpp`,icon:`<i class="bi bi-whatsapp"></i>`,link:""},
    {nombre:`insta`,icon:`<i class="bi bi-instagram"></i>`,link:""},
    {nombre:`facebook`,icon:`<i class="bi bi-facebook"></i>`,link:""}    
];
/* Constante que contiene el codigo del footer */
export const footerComponent=`
    ${footerlinks.map((e)=>{
        return`
        <div class="icon ${e.nombre}">            
        <a href="${e.link}">
            ${e.icon}
        </a>            
    </div>`;
    }).join('')}
    <div class="icon derechos">
        Copyright 2024 Herlein Facundo 
    </div>  
`;
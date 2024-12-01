//Funcion para crear las cards
export const cardComponent=(productos)=>{
    return `            
        ${productos.map((e) => {        
            return`
            <div class="card" data-id="${e.id}">
                <h3>${e.marca}</h3>
                <div class="img-btn">
                    <img class="imgModal" src="${e.img}" alt="${e.marca}"></img>
                    <button class="btn-cart"><i class="bi bi-cart-plus"></i></button> 
                </div>

                <div class="desc">
                    <p>${e.descripcion}</p>
                </div>

                <div class="card-footer">
                    <button class="btn-quit"><i class="bi bi-dash-square"></i></button>
                    <p class="cant">1</p>
                    <button class="btn-add"><i class="bi bi-plus-square"></i></button>
                    <p class="price">${e.precio}</p>                                                            
                </div>                                
            </div>`;
        }).join('')}
    `;
};
 

/* <button class="btn-cart"><i class="bi bi-cart3"></i></button> */
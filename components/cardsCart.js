/* export const cartCardComponent=`
    ${cardsElements.map((elem)=>{
        return`
        <div class="card-cart">
            <h3>${elem.titulo}</h3>
            <img src="${elem.imagen}" alt="${elem.alt}">

            <div class="desc">
                <p>${elem.descripcion}</p>
            </div>

            <div class="card-footer">
                <button class="btn-quit"><i class="bi bi-dash-square"></i></button>
                <p class="cant">${elem.cantidad}</p>
                <button class="btn-add"><i class="bi bi-plus-square"></i></button>
                <p class="price">${elem.precio}</p>
            </div>
        </div>
        `;
    }).join('')}    
`; */
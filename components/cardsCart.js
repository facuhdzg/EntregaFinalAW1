const cardsElements=[
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    },
    {titulo:"Titulo",imagen:"https://sporting.vtexassets.com/arquivos/ids/1070920-1200-1200?v=638440400876670000&width=1200&height=1200&aspect=true",
        alt:"Zapatillas",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita saepe nihil in veniam deserunt provident ducimus modi, non natus deleniti placeat fuga tenetur fugiat odio impedit nostrum qui alias?",
        cantidad:"1",precio:"$20000"
    }
];

export const cartCardComponent=`
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
`;
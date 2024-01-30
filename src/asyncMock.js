const MOCK_DATA = [
    {
        id: 1,
        name: 'Producto 1',
        img: 'https://via.placeholder.com/200',
        description: 'Lorem ipsum .....',
        category: 1,
        price: 2500,
        stock:25,
    },
    {
        id: 2,
        name: 'Producto 2',
        img: 'https://via.placeholder.com/200',
        description: 'Lorem ipsum .....',
        category: 2,
        price: 2500,
        stock:25,
    }, 
    {
        id: 3,
        name: 'Producto 3',
        img: 'https://via.placeholder.com/200',
        description: 'Lorem ipsum .....',
        category: 1,
        price: 25000,
        stock:25,
    },
    {
        id: 4,
        name: 'Producto 4',
        img: 'https://via.placeholder.com/200x200',
        description: 'Lorem ipsum .....',
        category: 2,
        price: 25050,
        stock:25,
    },
]


export const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{       
                resolve(MOCK_DATA)            
        }, 2000)
    })
}


export const pedirDatosDeCategoria = (category) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
                resolve(MOCK_DATA.filter((prod => prod.category === category)))            
        }, 2000)
    })
}

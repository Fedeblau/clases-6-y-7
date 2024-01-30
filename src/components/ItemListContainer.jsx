import React, { useEffect, useState } from 'react'
import { pedirDatos, pedirDatosDeCategoria } from '../asyncMock'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(products)
    // const promesa = new Promise((resolve, reject) =>{
    //     setTimeout(()=>{
    //         // resolve('papas')
    //         reject('nos quedamos con hambre')
    //     }, 1000)
    // })
    // quedate esperando el resultado de esta petición

    useEffect(() => {
        console.log('aca se monta el componente')
        pedirDatos()
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
        

  return (

    <>
        <h1>ItemListContainer</h1>
        {
            loading 
            ? <p className='text-red-700 text-5xl'>Cargando ......</p>
            : <ItemList products={products} />
        }
    </>
  )
}

export default ItemListContainer
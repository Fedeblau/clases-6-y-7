import React from 'react'

const Item = ({product}) => {
  return (
    <div className='card'>
        <h3>{product.name}</h3>
        <img src={product.img}/>

    </div>
  )
}

export default Item
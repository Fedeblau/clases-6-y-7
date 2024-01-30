import React, { useEffect, useState } from 'react'

const PokeApi = () => {

    const [pokedata, setPokedata] = useState()

    const [id, setId] = useState(1)

    const handleSiguiente = ()=> {
        setId(id + 1)
    }
    const handleAnterior = ()=> {
        if(id>0){
            setId(id - 1)
        }
    }

    // 'https://     pokeapi.co/api/v2/       pokemon    / 25'
    //  protocolo    dominio                  endpoint    url param

    // const url = 'https://pokeapi.co/api/v2/pokemon/1'

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`


    useEffect(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => setPokedata(data))
            .catch(err => console.log(err))
    }, [id])

    
    return (
        <>
            {
                pokedata &&
                <div>
                    <img src={pokedata.sprites.front_default} alt='foto pokemon' />
                    <h3>{pokedata.name}</h3>

                    <button onClick={ () => handleSiguiente() }>siguiente</button>
                    <button onClick={ () => handleAnterior() }>anterior</button>
                </div>
            }
        </>
    )
}

export default PokeApi
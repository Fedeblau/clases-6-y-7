import React, { useEffect, useState } from 'react'

const PokeCard = ({ pokedata }) => {
    const [pokeData, setPokeData] = useState()
    const [types, setTypes] = useState([])

    pokeData && console.log(pokeData.types)

    console.log(types)

    const getPokeById = async () => {
        try {
            const res = await fetch(pokedata.url)
            const data = await res.json()
            setPokeData(data)
            setTypes(data.types)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPokeById()
    }, [])


    return (
        <>
            {
                pokeData &&
                <div >
                    {types.some((type) => type.type.name === 'grass') &&
                        <>
                            <img src={pokeData.sprites.front_default} alt='foto poke' />
                            <h3>{pokeData.name}</h3>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default PokeCard
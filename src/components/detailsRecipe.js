import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getById } from '../services/recipesService'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

export default function DetailsRecipe() {
    let params = useParams();
    let id = params.idRecipe;
    const [currentRecipe, setCurrentRecipe] = useState({})

    useEffect(() => {
        getRecipe();
    }, [])

    async function getRecipe() {
        let x = await getById(id)
        setCurrentRecipe(x)
        console.log(x);
    }

    return (
        <>
            <div>
                <h1>{currentRecipe.name}</h1>
                <h1>{currentRecipe.id}</h1>
                <h1>{currentRecipe.level}</h1>
                <h1>{currentRecipe.img}</h1>
                {/* <img src={require('../images/'+currentRecipe.img)}></img>  */}
            </div>

        </>
    )
}
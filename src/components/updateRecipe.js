import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { updateRecipeServer } from '../services/recipesService'
import { updateRecipe } from '../store/recipe/action'
export default function UpdateRecipe() {
    let params = useParams();
    let id = params.id;
    let listRecipes = [];
    listRecipes = useSelector((store) => store.reducerRecipe.recipes)
    let ind = listRecipes.findIndex(x => x.id == id)
    let recipe = listRecipes[ind];
    let nameRef = useRef("")
    let levelRef = useRef("")
    let dis = useDispatch();
    let navigate = useNavigate();

    async function save() {
        let newRecipe = {
            "id": recipe.id,
            "name": nameRef.current.value,
            "level": levelRef.current.value,
            "kashrut": recipe.kashrut
        }
        let res = await updateRecipeServer(newRecipe)
        console.log(res);
        dis(updateRecipe(recipe))
        navigate('/detailsRecipe/' + recipe.id)


    }
    
    return (
        <>
            <br></br>
            {/* <input defaultValue={recipe.id} ref={nameRef}></input> */}
            <input defaultValue={recipe.name} ref={nameRef}></input>
            <input ref={levelRef}></input>
            <button onClick={save}>שמור שינויים</button>
        </>
    )
}
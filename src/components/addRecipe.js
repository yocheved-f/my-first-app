import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addRecipeServer } from '../services/recipesService'
import { addRecipe } from '../store/recipe/action'
import { addRecipeUser } from '../store/user/action'
export default function AddRecipe() {
    const dis = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((store) => store.reducerUser.currentUser)
    const nameRef = useRef("");
    const categoryRef = useRef("");
    const levelRef = useRef("");
    const kashrutRef = useRef("");
    const imgRef = useRef("");
    const ingredientsRef = useRef("");
    const InstructionsRef = useRef("");

    let [listIngredients, setListIngredients] = useState("");

    async function saveRecipe() {
        //נשמר לי כל הניתוב ואני רוצה רק את השם של התמונה בעצמה//imgRef//בתוך המשתנה
        //לכן נעביר את המשתנה למערך ע"י ספליט וניקח את האיבר האחרון במערך
        let img = imgRef.current.value.split('\\')
        const newRecipe = {
            "name": nameRef.current.value,
            "category": categoryRef.current.value,
            "level": levelRef.current.value,
            "kashrut": kashrutRef.current.value,
            //כאן השתמשנו באיבר האחרון במערך ניתוב התמונה
            "img": img[img.length - 1],
            "ingredients": listIngredients,
            "Instructions": InstructionsRef.current.value
        }
        let res = await addRecipeServer(newRecipe)
        if (res) {
            alert("המתכון נשמר בהצלחה")
            console.log(res);
            dis(addRecipe(newRecipe))
            navigate("/allRecipes")
        }
    }

    async function addRecipeToUser() {
        //נשמר לי כל הניתוב ואני רוצה רק את השם של התמונה בעצמה//imgRef//בתוך המשתנה
        //לכן נעביר את המשתנה למערך ע"י ספליט וניקח את האיבר האחרון במערך
        let img = imgRef.current.value.split('\\')
        const newRecipe = {
            "name": nameRef.current.value,
            "category": categoryRef.current.value,
            "level": levelRef.current.value,
            "kashrut": kashrutRef.current.value,
            //כאן השתמשנו באיבר האחרון במערך ניתוב התמונה
            "img": img[img.length - 1],
            "ingredients": ingredientsRef.current.value,
            "Instructions": InstructionsRef.current.value
        }
        debugger
        let x = await addRecipeServer(currentUser.id, newRecipe)
        dis(addRecipeUser(newRecipe))
        navigate("/favorite")

    }

    function addIngredient() {
        setListIngredients(listIngredients + ingredientsRef.current.value + " ")
        ingredientsRef.current.value = "";
    }

    function deleteIngredient() {
        setListIngredients("")
    }

    return (
        <>
            <br></br>
            <label>שם מתכון:</label>
            <input type="text" ref={nameRef}></input><br></br>
            <label>קטגוריה:</label>
            <input type="text" ref={categoryRef}></input><br></br>
            <label>רמת קושי</label>
            <input type="number" ref={levelRef}></input><br></br>
            <label>כשרות:</label>
            <select ref={kashrutRef}>
                <option hidden="hidden" >נא בחר כשרות</option>
                <option>בשרי</option>
                <option>חלבי</option>
                <option>פרווה</option>
            </select>
            <label>תמונה:</label>
            <input type="file" id="customFile" name="ff" accept=".jpg" multiple ref={imgRef} />
            <label>רכיבים:</label>
            <input type="text" ref={ingredientsRef}></input>
            <button onClick={addIngredient}>➕</button><br></br>
            <button onClick={deleteIngredient}>❎</button>
            <label>{listIngredients}</label><br></br>
            <label>הוראות הכנה:</label>
            <input type="text" ref={InstructionsRef}></input><br></br>
            <button onClick={saveRecipe}>פרסם לכולם</button>
            <button onClick={addRecipeToUser}>הוסף לספר המתכונים האישי</button>
        </>

    )
}

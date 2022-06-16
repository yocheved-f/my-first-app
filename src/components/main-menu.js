import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setMode, setCurrentUser } from '../store/user/action';


export default function MainMenu() {
    let dis = useDispatch();
    let navigate = useNavigate();
    let mode = useSelector((store) => store.reducerUser.mode)
    let currentUser = null
    currentUser = useSelector((store) => store.reducerUser.currentUser)
    
    useEffect(() => {
        navigate("allRecipes")
    }, [])

    function setModeToGuest() {
        dis(setCurrentUser(null))
        dis(setMode("guest"))
    }
    
    return (
        <>
            {/* {mode == "guest" && */}
            {/* <h1>{mode}</h1>
            <Link to="/login"> login</Link> |
            <Link to="/addRecipe"> add recipe</Link> |
            <Link to="/addUser"> add user</Link> |
            <Link to="/about"> about</Link> |
            <Link to="/allRecipes"> all recipes</Link> |
            <Link to="/favorite"> favorite 🖤</Link> |
            <Link to="/profile">profile</Link> */}
            {/* } */}
            {mode == "guest" &&
                <>
                    <h1>מצב אורח</h1>
                    <Link to="/login"> התחברות</Link> |
                    <Link to="/addUser"> משתמש חדש</Link> |
                    <Link to="/about"> אודות</Link> |
                    <Link to="/allRecipes"> כל המתכונים</Link> |
                </>
            }
            {mode != "guest" &&
                <>
                    <h1>user</h1>
                    <button onClick={setModeToGuest}>מצב אורח</button>
                    <Link to="/addRecipe"> הוסף מתכון</Link> |
                    <Link to="/about"> אודות</Link> |
                    <Link to="/allRecipes"> כל המתכונים</Link> |
                    <Link to="/favorite"> ספר מתכונים שלי 🖤</Link> |
                    <Link to="/profile"> פרופיל</Link>
                </>
            }


        </>

    )
}
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
            <Link to="/favorite"> favorite 馃枻</Link> |
            <Link to="/profile">profile</Link> */}
            {/* } */}
            {mode == "guest" &&
                <>
                    <h1>诪爪讘 讗讜专讞</h1>
                    <Link to="/login"> 讛转讞讘专讜转</Link> |
                    <Link to="/addUser"> 诪砖转诪砖 讞讚砖</Link> |
                    <Link to="/about"> 讗讜讚讜转</Link> |
                    <Link to="/allRecipes"> 讻诇 讛诪转讻讜谞讬诐</Link> |
                </>
            }
            {mode != "guest" &&
                <>
                    <h1>user</h1>
                    <button onClick={setModeToGuest}>诪爪讘 讗讜专讞</button>
                    <Link to="/addRecipe"> 讛讜住祝 诪转讻讜谉</Link> |
                    <Link to="/about"> 讗讜讚讜转</Link> |
                    <Link to="/allRecipes"> 讻诇 讛诪转讻讜谞讬诐</Link> |
                    <Link to="/favorite"> 住驻专 诪转讻讜谞讬诐 砖诇讬 馃枻</Link> |
                    <Link to="/profile"> 驻专讜驻讬诇</Link>
                </>
            }


        </>

    )
}
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginServer, getByName } from '../services/usersService'
import { getAllRecipes } from '../services/recipesService'
import { addRecipe } from '../store/recipe/action'
import { setCurrentUser, setMode } from '../store/user/action'
import { useNavigate } from 'react-router';

export default function Login() {
    let dis = useDispatch();
    let navigate = useNavigate();
    const nameRef = useRef();
    const passwordRef = useRef();

    async function login() {
        let name = nameRef.current.value;
        let password = passwordRef.current.value;
        if (!name || !password)
            alert("הכנס שם + סיסמא")
        else {
            let res = await loginServer(name, password)
            if (res.id) {
                dis(setCurrentUser(res))
                dis(setMode("user"))
                navigate("/allRecipes")
            }
            else
                alert(res);
            console.log(res);
            console.log(res);
        }

    }
    
    return (
        <>
            <label>שם משתמש</label><br></br>
            <input type="text" ref={nameRef}></input><br></br>
            <label>סיסמא</label><br></br>
            <input type="text" ref={passwordRef}></input><br></br>
            <input type="button" value="להתחברות" onClick={login}></input>
        </>
    )
}
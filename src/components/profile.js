import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { update } from '../services/usersService'
export default function Profile() {

    let currentUser = useSelector((store) => store.reducerUser.currentUser)
    let nameRef = useRef("");
    let passwordRef = useRef("")

    async function editUser() {
        let newUser = {
            "name": nameRef.current.value,
            "password": passwordRef.current.value,
            "email": currentUser.email,
            "id": currentUser.id
        }
        let x = await update(currentUser.id, newUser)
        console.log(x);
    }

    return (
        <>
            <br></br>
            <label>שם:</label><input type="text" defaultValue={currentUser.name} ref={nameRef} ></input>
            <label>סיסמה:</label><input type="text" defaultValue={currentUser.password} ref={passwordRef} ></input>
            <br></br>
            <input type="button" value="אישור" onClick={editUser} ></input>
        </>
    )
}
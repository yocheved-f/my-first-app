import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUserServer } from '../services/usersService'
import { addUser, setMode, setCurrentUser } from '../store/user/action'
export function AddUser() {

  let dis = useDispatch();
  let navigate = useNavigate();

  const nameRef = useRef("");
  const passwordRef = useRef("");
  const addressRef = useRef("");
  const emailRef = useRef("");

  async function saveUser() {
    let newUser = {
      "name": nameRef.current.value,
      "password": passwordRef.current.value,
      "address": addressRef.current.value,
      "email": emailRef.current.value,
      "listRecipes": null
    }
    let res = await addUserServer(newUser);
    debugger
    await dis(setMode("user"))
    await dis(addUser(newUser))
    await dis(setCurrentUser(newUser))
     navigate("/allRecipes")
    console.log(res);
  }

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">שם משתמש</label>
          <input type="text" class="form-control" ref={nameRef} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">סיסמה</label>
          <input type="password" class="form-control" id="exampleInputPassword1" ref={passwordRef} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">כתובת מייל</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">כתובת</label>
          <input type="text" class="form-control" ref={addressRef} />
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={saveUser}>Submit </button>
      </form>



    </>


  )
}
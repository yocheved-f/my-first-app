import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, addLikeServer } from '../services/recipesService'
import { addRecipeToUser, deleteRecipeToUser, update } from '../services/usersService'
import { setListRecipes, addLike } from '../store/recipe/action'
import DetailsRecipe from './detailsRecipe';
import '../App.css';
import { useNavigate } from 'react-router';
import { addRecipeUser, deleteRecipeUser } from '../store/user/action';
// import img1 from '../images/img1.jpg'
// import img2 from '../images/img2.jpg'
// import img3 from '../images/img3.jpg'

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([])

    let dis = useDispatch();
    let navigate = useNavigate();

    let listRecipe = [];
    let listRecipeToUser = useSelector((store) => store.reducerUser.recipesToCurrentUser)
    listRecipe = useSelector((store) => store.reducerRecipe.recipes)
    let searchRef = useRef("");
    let currentUser = useSelector((store) => store.reducerUser.currentUser)
    let recipesToUser = useSelector((store) => store.reducerUser.recipesToCurrentUser)
    let mode = useSelector((store) => store.reducerUser.mode)

    useEffect(() => {
        debugger
        allRecipes();
        console.log("current user", currentUser);


    }, [])

    async function allRecipes() {
        let res = await getAllRecipes();
        dis(setListRecipes(res))
        setRecipes(res)
        console.log(listRecipe);
        console.log("res", res);
    }

    function displayRecipe(id) {
        debugger
        if (id != undefined)
            navigate("/detailsRecipe/" + id)
    }

    async function addRecipeToUser1(r) {
        let x = await addRecipeToUser(currentUser.id, r)
        dis(addRecipeUser(r))
    }

    async function deleteRecipeToUser1(r) {
        let x = await deleteRecipeToUser(currentUser.id, r)
        dis(deleteRecipeUser(r))
        console.log(listRecipeToUser);
    }

    function search() {
        console.log("length", listRecipe)
        setRecipes(listRecipe.filter(x => x.name.includes(searchRef.current.value)))
    }

    async function addLike1(r) {
        debugger
        console.log(r);
        let r1 = await addLikeServer(r.id)
        dis((addLike(r)));
        // כדי שבתצוגה יראו את השינוי של הלייק נציב במערך ריסיפיז' את המערך שמגיע מהסטור
        setRecipes(listRecipe)
        console.log(r1);
    }

    function updateRecipe(id) {
        navigate("/updateRecipe/" + id)
    }

    return (
        <>
            <br></br>
            🔎<input type="text" placeholder="search" ref={searchRef} onKeyUp={() => search()} ></input>
            <div class="card-group">
                {recipes && recipes.map((r) => {
                    return (
                        <>
                        <div className="card" max-width="18rem">
                        {/* style="width: 18rem;"> */}                     
                           <img src={require('../images/' + r.img)} className="card-img-top"/>
                           <div className="card-body">
                           <p className="card-text">like {r.like}</p>                              
                            {recipesToUser && mode != "guest" && recipesToUser.findIndex(x => x.id == r.id) == -1 &&
                                <button onClick={() => addRecipeToUser1(r)}>🤍</button>
                            }
                            {!recipesToUser && mode != "guest" &&
                                <button onClick={() => addRecipeToUser1(r)}>🤍</button>
                            }
                            {recipesToUser && recipesToUser.findIndex(x => x.id == r.id) != -1 && currentUser &&
                                <button onClick={() => deleteRecipeToUser1(r.id)}>🖤</button>
                            }
                            {mode != "guest" &&
                                <>
                                    <button onClick={() => updateRecipe(r.id)}>🖊</button>
                                    <button onClick={() => addLike1(r)}>👍🏼</button>
                                </>
                            }  
                              <h5 className="card-title">{r.name}-{r.kashrut}</h5>
                               <p className="card-text">דרגת קושי: {r.level}</p>
                               <a href="#" className="btn btn-primary" onClick={() => { displayRecipe(r.id) }}>לפרטי המתכון</a>
                           </div>
                       </div>
                       
                       
                        </>
                    )
                })
                }
            </div>
            {!recipes.length &&
                <h1>אין פרטים תואמים את החיפוש שלך</h1>
            }
        </>
    )
}
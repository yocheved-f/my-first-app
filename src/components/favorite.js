import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {
    let recipesToUser = useSelector((store) => store.reducerUser.recipesToCurrentUser)
    let currentUser = useSelector((store) => store.reducerUser.currentUser)

    async function addRecipeToUser(r) {
        await addRecipeToUser(currentUser.id, r)
    }

    async function deleteRecipeToUser() {
    }

    return (
        <>
            {recipesToUser && recipesToUser.map((r) => {
                return (
                    <div className="divvv">
                        { recipesToUser.findIndex(x => x.id == r.id) == -1 &&
                            <h1 onClick={addRecipeToUser(r)}>👍🏻</h1>
                        }
                        { recipesToUser.findIndex(x => x.id == r.id) != -1 &&
                            <h1 onClick={deleteRecipeToUser(r)}>👎🏻</h1>
                        }
                        {/* <h1 onClick={addRecipeToUser(r)}>♥</h1> */}
                        <h1>name: {r.name}</h1>
                        <h1>level: {r.level}</h1>
                        <h2>kashrut: {r.kashrut}</h2>
                        {/* <button onClick={displayRecipe(r.id)}>{r.name}</button> */}
                    </div>

                )
            })}
        </>
    )
}

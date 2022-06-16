import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from '../components/login'
import AddRecipe from '../components/addRecipe'
import { AddUser } from '../components/addUser'
import About from '../components/about'
import AllRecipes from '../components/allRecipes'
import Favorite from '../components/favorite'
import DetailsRecipe from '../components/detailsRecipe'
import Profile from '../components/profile'
import UpdateRecipe from '../components/updateRecipe'

export default function RouterMenu() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/addrecipe" element={<AddRecipe />}></Route>
                <Route path="/addUser" element={<AddUser />}></Route>
                <Route path="/allRecipes" element={<AllRecipes />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/favorite" element={<Favorite />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/updateRecipe/:id" element={<UpdateRecipe/>}></Route>
                <Route path="/detailsRecipe/:idRecipe" element={<DetailsRecipe />}></Route>
                {/* <Route path="/recipe/:idRecipe"></Route> */}
            </Routes>
        </>
    )
}
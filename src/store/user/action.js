export function addUser(user) {
    debugger
    return { type: 'ADD_USER', payload: user }
}

export function setCurrentUser(user) {
    debugger
    return { type: 'SET_CURRENT_USER', payload: user }
}
export function setMode(m) {
    return { type: "SET_MODE", payload: m }
}
export function addRecipeUser(recipe){
    debugger
    return { type: "ADD_RECIPE_USER", payload: recipe }

}
export function deleteRecipeUser(recipe){
    return{type:"DELETE_RECIPE_USER", payload:recipe}
}
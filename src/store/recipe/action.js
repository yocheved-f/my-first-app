export function addRecipe(recipe) {
    return { type: 'ADD_RECIPE', payload: recipe }
}
export function setListRecipes(recipe) {
    return { type: 'SET_RECIPES', payload: recipe }
}
export function addLike(recipe){
    return { type: 'ADD_LIKE', payload: recipe }

}
export function updateRecipe(recipe){
    return {type:"UPDATE_RECIPE", payload:recipe}
}
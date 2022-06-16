import produce from 'immer'

const initialState = {
    recipes: []

}

const reducerRecipe = produce((state, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
                state.recipes.push(action.payload)
        case "SET_RECIPES":
            state.recipes = action.payload               
            break;
        case "ADD_LIKE":
            debugger
            var ind= state.recipes.findIndex(x=>x.id==action.payload.id);
            var x=state.recipes[ind]
            x.like++;
            break;
        case "UPDATE_RECIPE":
            var ind= state.recipes.findIndex(x=>x.id==action.payload.id)
            state.recipes[ind].name=action.payload.name;
            state.recipes[ind].level=12;
            break;         
        default:
            break;
    }
}, initialState)
export default reducerRecipe;
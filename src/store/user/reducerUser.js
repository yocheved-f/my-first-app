import produce from 'immer'

const initialState = {
    currentUser: {},
    users: [],
    recipesToCurrentUser: [],
    mode: "guest"
}

const reducerUser = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            if(action.payload)
            state.recipesToCurrentUser = action.payload.listRecipes
        case 'SET_MODE':
            state.mode = action.payload
            break;
        case 'ADD_RECIPE_USER':
                 if(!state.recipesToCurrentUser)
                    state.recipesToCurrentUser=action.payload 
                else  
                state.recipesToCurrentUser.push(action.payload)
                break
        case 'DELETE_RECIPE_USER':
                let ind=state.recipesToCurrentUser.findIndex(x=>x.id==action.payload.id)
                console.log("ind",ind);
                state.recipesToCurrentUser.splice(ind,1);
                default:
            break;
    }
}, initialState)

export default reducerUser;
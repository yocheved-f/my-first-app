import { createStoreHook } from "react-redux";
import { combineReducers, createStore } from "redux";
import reducerRecipe from "./recipe/reducerRecipe";
import reducerUser from "./user/reducerUser";

// const logA=(store)=>(next)=>(action)=>{
//     console.log(action.type)
//         return next(action);
// }

const reducer = combineReducers({ reducerRecipe, reducerUser })
const store = createStore(reducer)
window.store = store;
export default store;
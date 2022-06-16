import axios from "axios";

export function getAllRecipes() {
    return axios.get('http://localhost:4000/recipe/getAll')
        .then((res) => {
            if (res && res.data)
                return res.data;
        })
        .catch((err) => { console.log(err); })
}


export function addRecipeServer(newRecipe) {
    return axios.post('http://localhost:4000/recipe/add', newRecipe)
        .then((res) => {
            if (res && res.data) {
                alert("המתכון נוסף בהצלחה!!")
                return res.data
            }
        })
        .catch((err) => { alert(err) })
}
export function addLikeServer(id) {
    axios.patch('http://localhost:4000/recipe/addLike/' + id)
        .then((res) => {
            debugger
            if (res.data)
                return res.data
        })
        .catch((err) => { console.log(err.message); })
}

export function getById(id) {
    return axios.get('http://localhost:4000/recipe/getById/' + id)
        .then((res) => {
            if (res.data) {
                debugger
                console.log(res.data);
                return res.data;
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
export function updateRecipeServer(r) {
    return axios.put('http://localhost:4000/recipe/update/'+r.id , r)
        .then((res) => {
            if (res.data) {
                debugger
                console.log(res.data);
                return res.data;
            }
        })
        .catch((err) => {
            console.log(err);
        })
}




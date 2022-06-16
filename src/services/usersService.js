import axios from 'axios'


export function loginServer(name, password){
    return axios.get('http://localhost:4000/user/login/'+name+"/"+password)
    .then((res)=>{
        if(res && res.data)
           return res.data
    })
    .catch((err)=>{console.log(err);})
}

export function addUserServer(newUser){
    return axios.post('http://localhost:4000/user/add', newUser)
        .then ((res)=>{
            if(res && res.data){
                alert("נכנסת לרשימה בהצלחה")
                return res.data
            }
        })
        .catch((err)=>{
            {alert(err);}
        }) 
}

export function getByName(name){
    return axios.get('http://localhost:4000/user/getByName/'+name)
    .then((res)=>{
        if(res && res.data)
            return res.data  
    })
    .catch((err)=>{console.log(err);})
}
export function addRecipeToUser (id, recipe){
    return axios.post('http://localhost:4000/user/addRecipe/'+id,recipe)
    .then((res)=>{
        if(res && res.data)
        {
            alert("המתכון נוסף למשתמש!!")
            return res.data
        }
    })
    .catch((err)=>{console.log(err);})
}

export function deleteRecipeToUser (id, recipe){
    return axios.delete('http://localhost:4000/user/deleteRecipe/'+id,recipe)
    .then((res)=>{
        if(res && res.data)
        {
            alert(" המתכון הוסר למשתמש זה!!")
            return res.data
        }
    })
    .catch((err)=>{console.log(err);})
}

export function update(id,newUser){
    return axios.patch('http://localhost:4000/user/update/'+id,newUser)
    .then((res)=>{
        if(res && res.data)
        {
            alert("הפרטים השתנו!")
            return res.data
        }
    })
    .catch((err)=>{console.log(err);})
}
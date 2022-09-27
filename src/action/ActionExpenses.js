export const addUser =(data)=> {
    return{
        type: "ADD_NOTE",
        payload: data
    }
}

export const deleteUser =(id)=> {
    return{
        type:"DELETE_NOTE",
        payload: id
    }
} 

export const editUser = (info) => {
    return{
        type:"EDIT_NOTE",
        payload:{info}
    }
} 
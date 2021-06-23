// create the initial state for the reducer

const initialState ={
    token:"",
}


//create token reducer

const tokenReducer = (state=initialState, {type,payload})=>{
switch(type){
    case "SET_TOKEN":
        return {token:payload}
}

}

export default articleReducer


// ACTIONS

export const setToken = (token)=>{
    return {
        type: "SET_TOKEN",
        payload: token
    }
}
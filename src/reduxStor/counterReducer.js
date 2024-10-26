const defaultState ={
    counter: []
}


// {type, payload}
const counterReducer = (state = defaultState,action) => {
    if (action.type == "Add") {
        return {...state, counter: state.counter + action.payload}
    }else if (action.type == "Remove"){
        return {...state, counter: state.counter - action.payload}
    }else if(action.type == "Five"){
        return({...state, counter: state.counter + action.payload})
    }else{
        return state;
    }
    
}

export default counterReducer;
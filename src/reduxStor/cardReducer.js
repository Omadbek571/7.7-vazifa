const defaultState = {
    card: []
}

// let data = [
//     { id: 1, name: "Telefon", price: 200, count: 2 },
//     { id: 2, name: "Ayfon", price: 500, count: 3 },
// ]

function cardReducer(state = defaultState, action) {
    if (action.type == "ADD_CARD") {
        let copid = [...state.card];
        copid.push(action.payload)
        return { ...state, card: copid }

    } else if (action.type == "REMOVE_CARD") {
        let copid = [...state.card]
        copid = copid.filter(function (value) {
            return value.id != action.payload
        })
        return { ...state, card: copid }
    } else if (action.type == "CLEAR_CARD") {
        return {...state, card: []}
    } else if (action.type == "UPDETE_CARD") {
        return state
    } else {
        return state
    }

}

export default cardReducer;
const redux = require('redux')


const initialState = {
    num: 0,

}


// Reducer 

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_NUM':
            return {
                ...state, // creating a copy of state
                num: state.num + 1
            }

        case 'ADD_NUM':
            return {
                ...state, // always create a copy of the state
                num: state.num + action.payload
            }
        case 'DEC_NUM':
            return {
                ...state, // dec
                num: state.num - action.payload
            }
        default:
            break;
    }
    return state
}

// sotre
const store = redux.createStore(rootReducer)

//console.log('store.getState() before dispatch:', store.getState())

// Dispatching actions

store.subscribe(() => {
    console.log('Subscribe: ', store.getState())
})

store.dispatch({
    type: 'INC_NUM',

})
//console.log('store.getState():', store.getState())
store.dispatch({
    type: "ADD_NUM",
    payload: 34
})

setTimeout(() => {
    store.dispatch({
        type: 'DEC_NUM',
        payload: 2
    })
}, 2000);



// console.log('store:', store)
//console.log('store.getState() after dispatch:', store.getState())
import { contentActionTypes } from './content.types'


const INITIAL_STATE = {

    content : null

}

const contentReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case contentActionTypes.SET_CONTENT:
            return {
                ...state,
                content:action.payload
            }
            
        default:
            return state;
            
    }

}

export default contentReducer;
import { pageActionTypes } from './page.types'


const INITIAL_STATE = {

    pageId : null

}

const pageReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case pageActionTypes.SET_PAGE:
            return {
                ...state,
                pageId:action.payload
            }
            
        default:
            return state;
            
    }

}

export default pageReducer;
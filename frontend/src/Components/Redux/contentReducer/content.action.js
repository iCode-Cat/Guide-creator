import {contentActionTypes} from './content.types';

export const setContent = content => ({
    
    type:contentActionTypes.SET_CONTENT,
    payload:content

})
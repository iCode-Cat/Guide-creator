import {pageActionTypes} from './page.types';

export const setPages = page => ({
    
    type:pageActionTypes.SET_PAGE,
    payload:page

})
import { combineReducers } from 'redux';
import contentReducer from './contentReducer/content.reducer'
import pageReducer from './pageReducer/page.reducer'
 
export default combineReducers({
  content: contentReducer,
  page:pageReducer
});

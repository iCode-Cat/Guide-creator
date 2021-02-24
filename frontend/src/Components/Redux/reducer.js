import { combineReducers } from 'redux';
import contentReducer from './contentReducer/content.reducer'
 
export default combineReducers({
  content: contentReducer
});

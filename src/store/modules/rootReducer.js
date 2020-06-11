import {combineReducers} from 'redux';
import category from './category/reducer';
import drinks from './drinks/reducer';

export default combineReducers({
  category,
  drinks,
});

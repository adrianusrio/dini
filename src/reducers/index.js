import content from './content';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    content: content
})

export default allReducers
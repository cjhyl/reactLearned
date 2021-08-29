import { combineReducers } from 'redux';
import CounterReducer from './counter.reducer';
import ModalReducer from './modal.reducer';

// combineReducers 合并Reducer的方法 
// { counter: { count: 0 }, model: { show: false } }
export default combineReducers({
  counter: CounterReducer,
  modal: ModalReducer
})
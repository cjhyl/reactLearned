import { SHOWMODAL, HIDEMODAL } from "../const/modal.const";

const initialState = {
  show: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOWMODAL:
      return {
        show: true
      }
    case HIDEMODAL:
      return {
        show: false
      }
    default: 
      return state;
  }
}
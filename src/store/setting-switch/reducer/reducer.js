import {CHANGE_STYLE} from "../action-types";

const initialState = {
  style: null,
  language: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STYLE: {
      return {
        ...state,
        style: action.payload
      };
    }
    default:
      return state;
  }
};

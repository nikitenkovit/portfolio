import {CHANGE_STYLE} from "../action-types";

export default {
  changeStyle: (style) => ({
    type: CHANGE_STYLE,
    payload: style
  })
};

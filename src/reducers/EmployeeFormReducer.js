import {
  EMPLOYEE_INPUT_CHANGED,
  EMPLOYEE_FORM_RESET,
  EMPLOYEE_LOAD,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: null,
  phone: null,
  shift: null,
  uid: null,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMPLOYEE_INPUT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_LOAD:
      const { selectedEmployee } = action.payload;
      return { ...state, ...selectedEmployee };

    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

    case EMPLOYEE_FORM_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

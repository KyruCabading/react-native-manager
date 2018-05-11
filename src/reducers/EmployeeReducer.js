import {
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_START
} from '../actions/types';

const INITIAL_STATE = {
  employees: {},
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_START:
      return { ...state, loading: true};

    case EMPLOYEES_FETCH_SUCCESS:
      return { ...INITIAL_STATE, employees: action.payload};

    default:
      return state;
  }
}

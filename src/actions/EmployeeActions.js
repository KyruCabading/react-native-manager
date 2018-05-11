import firebase from 'firebase';
import NavigationService from '../navigation/NavigationService';
import {
  EMPLOYEE_INPUT_CHANGED,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_START,
  EMPLOYEE_LOAD,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FORM_RESET,
} from './types';

export const employeeFormReset = () => {
  return {
    type: EMPLOYEE_FORM_RESET
  }
}
export const employeeChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_INPUT_CHANGED,
    payload: { prop, value }
  }
}

export const employeeLoad = ({ selectedEmployee }) => {
  return {
      type: EMPLOYEE_LOAD,
      payload: { selectedEmployee }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        NavigationService.navigate('EmployeeList')
      })
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_FORM_RESET })
        NavigationService.navigate('EmployeeList')
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        NavigationService.navigate('EmployeeList')
      })
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYEES_FETCH_START })
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      })
  }
};

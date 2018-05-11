import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NavigationService from './NavigationService';

import {
  LoginScreen,
  EmployeeListScreen,
  EmployeeCreateScreen,
  EmployeeEditScreen
} from '../screens';



export default AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: ({navigation}) => ({
        title: "Login",
      })
    },
    EmployeeList: {
      screen: EmployeeListScreen,
      navigationOptions: ({navigation}) => ({
        title: "Employee Dashboard",
        headerLeft: null,
        headerRight: (
          <Button
            title="Add"
            onPress={() => NavigationService.navigate('EmployeeCreate')}/>
        )
      })
    },
    EmployeeCreate: {
      screen: EmployeeCreateScreen,
      navigationOptions: ({navigation}) => ({
        title: "Create Employee"
      })
    },
    EmployeeEdit: {
      screen: EmployeeEditScreen,
      navigationOptions: ({navigation}) => ({
        title: "Edit Employee"
      })
    },
  },
  {
    initialRouteName: 'Login'
  }
);

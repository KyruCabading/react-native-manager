import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EmployeeEdit from '../components/EmployeeEdit';

class EmployeeEditScreen extends Component {
  render() {
    const { selectedEmployee } = this.props.navigation.state.params;
    return (
      <EmployeeEdit selectedEmployee={selectedEmployee}/>
    )
  };
};

export { EmployeeEditScreen };

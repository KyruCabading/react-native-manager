import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import EmployeeList from '../components/EmployeeList';

class EmployeeListScreen extends Component {
  render() {
    return (
        <EmployeeList navigation={this.props.navigation} />
    )
  }
}

export { EmployeeListScreen };

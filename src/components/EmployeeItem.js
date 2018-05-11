import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import NavigationService from '../navigation/NavigationService';

class EmployeeItem extends Component {
  onRowPress(){
    NavigationService.navigate('EmployeeEdit', { selectedEmployee: this.props.employee })
  }

  render(){
    const { name } = this.props.employee;
    return(
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <CardSection>
          <Text style={styles.textStyle}>
            {name}
          </Text>
        </CardSection>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    padding: 5,
  }
})

export default EmployeeItem;

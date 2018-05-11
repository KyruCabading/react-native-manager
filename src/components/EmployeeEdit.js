import React, { Component } from 'react';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeChanged, employeeLoad, employeeSave, employeeDelete } from '../actions';
import NavigationService from '../navigation/NavigationService';
import { text } from 'react-native-communications'

class EmployeeEdit extends Component {
  state = {
    showModal: false,
  }
  componentDidMount() {
    const { selectedEmployee } = this.props;
    this.props.employeeLoad({ selectedEmployee })
  }

  employeeSave() {
    const { name, phone, shift, uid } = this.props;
    this.props.employeeSave({ name, phone, shift, uid })
  }

  onAccept() {
    const { uid } = this.props
    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { name, phone, shift } = this.props;
    const textBody = `Hi ${name} your upcoming shift is on ${shift}.`

    return(
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <Button onPress={() => text(phone, textBody)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => NavigationService.navigate('EmployeeList')}>
            Cancel
          </Button>

          <Button onPress={this.employeeSave.bind(this)}>
            Save
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to fire {name}?
        </Confirm>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  pickerLabelText: {
    fontSize: 18,
    paddingLeft: 20,
  }
})

const mapStateToProps = (state) => {
  const { name, phone, shift, uid } = state.employeeForm;

  return { name, phone, shift, uid }
}

export default connect(mapStateToProps, {
  employeeChanged,
  employeeLoad,
  employeeSave,
  employeeDelete
})(EmployeeEdit);

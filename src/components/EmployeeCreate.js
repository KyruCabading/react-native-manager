import React, { Component } from 'react';
import { StyleSheet  } from 'react-native';
import { Card, CardSection, Button } from '../components/common';
import { connect } from 'react-redux';
import { employeeCreate, employeeFormReset } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
  componentDidMount(){
    this.props.employeeFormReset()
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return(
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
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
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeCreate, employeeFormReset })(EmployeeCreate);

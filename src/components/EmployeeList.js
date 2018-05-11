import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatList, View, Text, Button, ActivityIndicator } from 'react-native';
import { Spinner } from '../components/common';
import { employeesFetch } from '../actions';
import EmployeeItem from './EmployeeItem';


class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderEmployeeList() {
    if(this.props.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />;
        </View>
      )
    }
    return (
        <FlatList
          data={this.props.employees}
          renderItem={({item}) => <EmployeeItem employee={item}/>}
          keyExtractor={(item, index)=> item.uid}/>
    );
  }

  render() {
    return (
      this.renderEmployeeList()
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employeeList.employees, (val, uid) => {
    return { ...val, uid };
  });
  const { loading } = state.employeeList;

  return { employees, loading };
}


export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

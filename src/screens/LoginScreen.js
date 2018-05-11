import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';
import { Card } from '../components/common';

class LoginScreen extends Component {
  render() {
    return <LoginForm/>;
  }
}

export { LoginScreen };

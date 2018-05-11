 import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { createStackNavigator } from 'react-navigation';
import AppNavigator from './src/navigation/NavigationStack';
import NavigationService from './src/navigation/NavigationService';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCRsGNSTi0aqW-a2N4PvECJX198T45aYQI",
      authDomain: "react-manager-489dd.firebaseapp.com",
      databaseURL: "https://react-manager-489dd.firebaseio.com",
      projectId: "react-manager-489dd",
      storageBucket: "react-manager-489dd.appspot.com",
      messagingSenderId: "1083556731812"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
        </View>
      </Provider>
    )
  }
}

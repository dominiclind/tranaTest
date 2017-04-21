import React, { Component } from 'react';
import codePush from "react-native-code-push";

import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

// screens
import Router from './router';

class App extends Component {
  render() {
     return (
        <Router />
      ) 
  }
}

let codePushOptions = {
  deploymentKey: 'mdmKRHH_r2aHa2sRy4CE9062OWL3VJKOj_Okb',
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE
};

export default codePush(codePushOptions)(App)

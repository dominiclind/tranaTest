import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

// screens
import Login from 'app/screens/Login';
import Feed from 'app/screens/Feed';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Login />
    )
  }
}

export default App

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from 'app/components/Button';

import { login } from 'app/utils/fb';

class Login extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text
          style={styles.screenHeader}
        >
          Login screen
        </Text>
        <Button onPress={() => login()}>HEj</Button>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  }
});


export default Login

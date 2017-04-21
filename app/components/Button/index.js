import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class Button extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={ styles.component }>
        <Text>i am component Button!</Text>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'blue'
  }
});


export default Button

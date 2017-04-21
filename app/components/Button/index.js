import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


class Button extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={ styles.component }>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'black',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});


export default Button

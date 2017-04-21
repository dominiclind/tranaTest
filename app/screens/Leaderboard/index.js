import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

class Leaderboard extends Component {
  static navigationOptions = {
    tabBarLabel: '',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Text style={{fontSize: 34}}>🏆</Text>
    ),
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {

    return (
      <View style={styles.screen}>

        <ScrollView style={{flex: 1}}>
          <Text>Hej</Text>
        </ScrollView>

      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20
  }
});


export default Leaderboard

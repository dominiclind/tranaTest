import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import FeedItem from 'app/components/FeedItem';


class Feed extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView style={styles.screen}>
        <FeedItem name="Alexander Ström" thing="Cigarette"/>
        <FeedItem name="Luca Deasti" thing="Crack cocain"/>
      </ScrollView>
    )
  }
}


// styles
const styles = StyleSheet.create({
  screen : {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  }
});


export default Feed

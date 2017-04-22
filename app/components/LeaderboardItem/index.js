import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {distanceInWords} from 'date-fns'

class LeaderboardItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      name = 'Test Testsson',
      avatar = false,
      points = false
    } = this.props;

    return (
      <View style={ styles.component }>
        <View style={styles.imageContainer}>
          {avatar ? (<Image
            source={{uri: avatar}}
            style={styles.image}
          />) : null}
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          {points ? (
            <Text style={styles.date}>{points} poäng</Text>
          ) : null}
        </View>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  component : {
    backgroundColor:'transparent',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#E9ECEF',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imageContainer: {
    justifyContent: 'center'
  },
  name: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 14,
    marginBottom: 0,
    marginTop: 5
  },
  desc: {
    color: '#868E96',
    fontSize: 30,
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  bold :{
    fontWeight: '500',
    color: 'black'
  },
  date: {
    fontSize: 12,
    marginTop: 5,
    color: '#868E96',
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    resizeMode: 'cover',
    marginRight: 15
  },
});


export default LeaderboardItem

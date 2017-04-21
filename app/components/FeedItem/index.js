import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {distanceInWords} from 'date-fns'

class FeedItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      name = 'Test Testsson',
      thing = 'Beer',
      avatar = false,
      date = 123412312
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

          <Text style={styles.date}>{distanceInWords(new Date(date), new Date())}</Text>

          {/* }
          <View style={styles.meta}>
            <StyledText weight="bold" style={styles.metaItem}>{duration}</StyledText>
            <StyledText weight="bold"  style={styles.metaItem}>{weightLifted} kg</StyledText>
          </View>
          {*/}

        </View>
        <Text style={styles.desc}><Text style={styles.bold}>{thing}</Text></Text>
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
    paddingVertical: 15
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
    marginBottom: 8,
    position: 'absolute',
    right: 20,
    top: 12,
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


export default FeedItem

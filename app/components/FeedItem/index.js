import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class FeedItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      name = 'Test Testsson',
      thing = 'Beer',
      date = '2 hours ago'
    } = this.props;

    return (
      <View style={ styles.component }>
        <View style={styles.imageContainer}>
          <Image
            source={require('./avatar.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>Just finished a <Text style={styles.bold}>{thing}</Text></Text>
          <Text style={styles.date}>{date}</Text>

          {/* }
          <View style={styles.meta}>
            <StyledText weight="bold" style={styles.metaItem}>{duration}</StyledText>
            <StyledText weight="bold"  style={styles.metaItem}>{weightLifted} kg</StyledText>
          </View>
          {*/}

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
    paddingVertical: 15
  },
  imageContainer: {
    justifyContent: 'center'
  },
  name: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 2
  },
  desc: {
    color: '#868E96',
    fontSize: 15,
    marginBottom: 8
  },
  bold :{
    fontWeight: '500',
    color: 'black'
  },
  date: {
    fontSize: 12
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

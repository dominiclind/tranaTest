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


import { track, getItems } from 'app/utils/functions';

import FeedItem from 'app/components/FeedItem';
import Button from 'app/components/Button';

import ITEMS from 'app/utils/items';

const OVERLAY_HEIGHT = 400;

class Feed extends Component {

  constructor(props) {
    super(props)

    this._scrollView = false;
    this.state = {
      showAdd: new Animated.Value(0),
      showDimmer: false,
      feed: []
    }
  }

  componentDidMount() {
    getItems((feed) => {
      this.setState({feed});
      // reset scroll
      this._scrollView.scrollTo({y: 0});
    });
  }

  showAdd() {
    this.setState({showDimmer: true});
    Animated.spring(this.state.showAdd,{
      toValue: 1,
      tension: 20,
      spring: 10
    }).start();
  }
  hideAdd() {
    this.setState({showDimmer: false});
    Animated.spring(this.state.showAdd,{
      toValue: 0,
      tension: 20,
      spring: 10
    }).start();
  }
  track(item) {
    track(item, () => {
      this.hideAdd()
    });
  } 
  render() {
    const { showDimmer, showAdd, feed } = this.state;

    const translateY = showAdd.interpolate({
      inputRange: [0,1],
      outputRange: [OVERLAY_HEIGHT,0],
      extrapolate: 'clamp'
    });

    const dimmerOpacity = showAdd.interpolate({
      inputRange: [0,.8,1],
      outputRange: [0,0,1],
      extrapolate: 'clamp'
    });

    return (
      <View style={styles.screen}>
        
        <ScrollView
          style={{flex: 1}}
          ref={(scrollView) => { this._scrollView = scrollView; }}
        >
        {feed.map((item) => (
          <FeedItem
            key={item.id}
            avatar={item.user.avatar}
            name={item.user.displayName}
            thing={item.emoji}
            date={item.createdAt || 123901239}
          />
        ))}
        </ScrollView>

        <View style={styles.addButtonOverlay}>
          <Button onPress={() => this.showAdd()}>ADD</Button>
        </View>

        {showDimmer ? (
          <TouchableWithoutFeedback onPress={() => this.hideAdd()}>
            <Animated.View
              style={[
                styles.dimmer,
                {
                  opacity: dimmerOpacity
                }
              ]}
            >
            </Animated.View>
          </TouchableWithoutFeedback>
        ) : null}
        <Animated.View
          style={[
            styles.addOverlay,
            {transform: [ {translateY: translateY} ]}
          ]}
        >
          <ScrollView style={{flex: 1}}>
            {ITEMS.map((item, i) => (
              <TouchableOpacity key={i} onPress={() => this.track(item)}>
                <View style={styles.trackItem}>
                  <Text style={styles.trackText}>{item.emoji} * {item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      
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
  },
  screenHeader: {
    fontSize: 50,
    fontWeight: '500',
    position: 'absolute',
    top: 50,
    left: 30
  },
  addButtonOverlay: {
    position: 'absolute',
    bottom:0,
    left:0,
    right:0,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dimmer: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  addOverlay: {
    position: 'absolute',
    bottom: 0,
    height: OVERLAY_HEIGHT,
    width: '100%',
    backgroundColor: 'black' 
  },
  trackItem: {
    padding: 20
  },
  trackText: {
    color: 'white',
    fontSize: 18
  }
});


export default Feed

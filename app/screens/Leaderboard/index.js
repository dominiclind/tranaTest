import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { getItems, getItemsOnce } from 'app/utils/functions';

import Confetti from 'react-native-confetti';

import ParallaxHeader from 'app/components/ParallaxHeader';
import LeaderboardItem from 'app/components/LeaderboardItem';

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

    this.state = {
      leaderboard: []
    }
  }
  formattedLeaderboard(feed){
    const users = {};

    feed.map((item) => {
      // fill with users
      if(!users[item.user.uid]){
        users[item.user.uid] = {
          ...item.user,
          totalPoints: 0
        };
      }

      // sum points
      users[item.user.uid].totalPoints = users[item.user.uid].totalPoints + (item.points || 0);
    });

    const keys = Object.keys(users);
    const arr = keys.map((key) => {
      return {
        ...users[key],
        id: key
      }
    });

    return arr.sort(function(a, b) {
      a = new Date(a.totalPoints);
      b = new Date(b.totalPoints);
      return a>b ? -1 : a<b ? 1 : 0;
    });
  }
  componentDidMount() {
    getItemsOnce((feed) => {
      this.setState({leaderboard: this.formattedLeaderboard(feed)});
    });

    getItems((feed) => {
      this.setState({leaderboard: this.formattedLeaderboard(feed)});
    });
  }
  render() {

    return (
      <View style={styles.fill}>
        <ParallaxHeader
        title="Leaderboard"
        backBtn={false}
        paddingTop={0}
        getRef={(scrollView) => { this._scrollView = scrollView; }}
        >
          
        {this.state.leaderboard.length > 3 ? (
          <View style={styles.hero}>
            
            <View style={[styles.placement, styles.p3]}>
              <Image style={styles.pAvatar}source={{uri: this.state.leaderboard[2].avatar}}/>
              <View style={styles.pTextW}>
                <Text style={styles.pText}>3</Text>
              </View>
            </View>

            <View style={[styles.placement, styles.p2]}>
              <Image style={styles.pAvatar}source={{uri: this.state.leaderboard[1].avatar}}/>
              <View style={styles.pTextW}>
                <Text style={styles.pText}>2</Text>
              </View>
            </View>

            <View style={[styles.placement, styles.p1]}>
              <Image style={styles.pAvatar}source={{uri: this.state.leaderboard[0].avatar}}/>
              <View style={styles.pTextW}>
                <Text style={styles.pText}>1</Text>
              </View>
            </View>

          </View>
        ): null}

        {this.state.leaderboard.map(user => (
          <LeaderboardItem
            key={user.id}
            avatar={user.avatar}
            name={user.displayName}
            points={user.totalPoints}
          />
        ))}
      </ParallaxHeader>
      </View>
    )
  }
}


// styles
const styles = StyleSheet.create({
  fill : {
    flex: 1,
  },
  hero: {
   // height: 300
   paddingVertical: 20,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center'
  },
  placement: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  pTextW: {
    position:'relative',
    top:-15,
    borderRadius: 15,
    color: 'white',
    backgroundColor: 'black',
    width:30,
    height:30,
    textAlign:'center',
    justifyContent: 'center'
  },
  pText: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign:'center'
  },
  p1:{
    transform: [{scale: 1.2}],
    shadowRadius: 10,
    shadowOffset: {x:0,y:0},
    shadowColor:'black',
    shadowOpacity: .2
  },
  p2: {
    position:'absolute',
    left:70
  },
  p3: {
    position:'absolute',
    right:70
  }
});


export default Leaderboard

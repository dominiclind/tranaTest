import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { checkLogin } from 'app/utils/functions';

// screens
import Login from 'app/screens/Login';
import Feed from 'app/screens/Feed';
import Leaderboard from 'app/screens/Leaderboard';

const AppNavigator = TabNavigator({
  Main: {
    screen: Feed
  },
  Leaderboard: {
    screen: Leaderboard
  }
}, {
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: false
  },
  animationEnabled: true
});

class Router extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      route: false
    }
  }
 componentDidMount() {
   
  }

  componentDidMount() {
    checkLogin(evt => {

      if(evt.authenticated){
        this.setState({route:'feed', loading: false});
      } else {
        this.setState({route:'login', loading:false});
      }
    });
  }

  render() {


    if(this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )
    }else {
      switch(this.state.route){
        case 'login':
          return <Login />
        break;
        case 'feed':
          return <AppNavigator />
        break;

        default:
          return <Login />
        break;
      }
    }
  }
}

export default Router

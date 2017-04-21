import React, { Component } from 'react';

import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { checkLogin } from 'app/utils/functions';

// screens
import Login from 'app/screens/Login';
import Feed from 'app/screens/Feed';

class Router extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      route: false
    }
  }

  componentDidMount() {
    checkLogin(evt => {
      this.setState({ loading: false });
      if(evt.authenticated){
        this.setState({route:'feed'});
      } else {
        this.setState({route:'login'});
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
          return <Feed />
        break;

        default:
          return <Login />
        break;
      }
    }
  }
}

export default Router

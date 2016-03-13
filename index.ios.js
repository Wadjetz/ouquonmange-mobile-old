/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  StatusBarIOS,
  NavigatorIOS,
  AlertIOS
} from 'react-native';
import styles from './styles/styles';
import CommunitiesList from './views/CommunitiesList';

StatusBarIOS.setStyle('light-content')

class OuquonmangeMobile extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.mainContainer}
        barTintColor='#283739'
        titleTextColor='#F7EEBB'
        tintColor='#F7EEBB'
        initialRoute={{
          component: CommunitiesList,
          title: 'Communities',
          rightButtonTitle: 'Search',
          onRightButtonPress: () => AlertIOS.alert(
            'Search', 'You pressed the search button'
          )
        }}
      />
    );
  }
}

AppRegistry.registerComponent('OuquonmangeMobile', () => OuquonmangeMobile);

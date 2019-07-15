import React from 'react';
import { Text, View } from 'react-native';
import Tab1 from './Tab1'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Icon from "react-native-vector-icons/FontAwesome";


import Home from '../screens/HomeScreen'
import Profile from '../screens/ProfileScreen'


const TabNavigator = createMaterialTopTabNavigator({
  Home:  {
    screen:Home,
    navigationOptions:{
      tabBarLabel:"albiuet",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile:  {
    screen:Profile,
    navigationOptions:{
      tabBarLabel:"Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={30} color={tintColor} />
      )
    }
  },
  
},


{
//tabBarPosition:"bottom",



  tabBarOptions: {
    showIcon:true,
    activeTintColor: '#ccaabb',
    labelStyle: {
      fontSize: 16,
      color:'white'
    },
    style: {
      backgroundColor: 'black',
    },
    indicatorStyle:{
      backgroundColor:'red'
    }
  }
},
{
 // drawerPosition: 'right',
  

}

);

export default createAppContainer(TabNavigator);
import React from 'react';
import { Text, View } from 'react-native';
import Tab1 from './Tab1'
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Icon from "react-native-vector-icons/FontAwesome";


import Home from "../component/screens/Home"
import Teacher from "../component/screens/Search";
import Explore from "../component/screens/Explore";
import Noor from "../component/screens/Noor";


const TabNavigator = createMaterialTopTabNavigator({
 
  Teacher:  {
    screen:Teacher,
    navigationOptions:{
    //  tabBarColor: '#27a156',
      tabBarLabel:"الكادر التدريسي",
      
      tabBarIcon: ({ tintColor }) => (
        <Icon name="users" size={16} color={tintColor} />
      ),
      tabBarOptions: {
        // drawerPosition: 'right',
         showIcon:true,
         activeTintColor: '#fff',
          inactiveTintColor: '#ccc',
         labelStyle: {
           fontSize: 14,
             
         },
         style: {
           backgroundColor: '#27a156',
         },
         indicatorStyle:{
           backgroundColor:'#114c28'
         }
       }
    }
  },
  Home:  {
    screen:Home,
    navigationOptions:{
      
      tabBarLabel:"الادارة",
      tabBarColor:'red',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={16} color={tintColor} />
      ),
      tabBarOptions: {
        // drawerPosition: 'right',
         showIcon:true,
         activeTintColor: '#fff',
          inactiveTintColor: '#ccc',

         labelStyle: {
           fontSize: 14,
          // color:'red'
         },
         style: {
           backgroundColor: '#9427a1',
           
         },
         indicatorStyle:{
           backgroundColor:'#631d6b'
         }
       }
    }
  },
},


{
//tabBarPosition:"bottom",

initialRouteName:'Home'

 /*  tabBarOptions: {
   // drawerPosition: 'right',
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
  } */
},


);

export default createAppContainer(TabNavigator);
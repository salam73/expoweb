//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Icon name="user" size={32} color="green"  />
               <Icon name="home" size={32}  />
               <Icon name="bell" size={32}  />
               <Icon name="graduation-cap" size={32}  />
               <Icon name="book" size={32}  />
               <Icon2 name="bus" size={32}  />
               <Icon2 name="bank" size={32}  />
               <Icon2 name="library" size={32}  />
               <Icon2 name="bus-clock" size={32}  />
               <Icon2 name="account-group" size={32}  />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor: '#cccaaa',
    },
});

//make this component available to the app
export default Home;

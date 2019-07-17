//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.proileImage =
            'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
        //Array of the sidebar navigation option with icon and screen to navigate
        //This screens can be any screen defined in Drawer Navigator in App.js
        //You can find the Icons from here https://material.io/tools/icons/
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'المدرسة',
                screenToNavigate: 'Screen1',
            },
            {
                navOptionThumb: 'bell',
                navOptionName: 'الاشعارات',
                screenToNavigate: 'Screen2',
            },
            {
                navOptionThumb: 'graduation-cap',
                navOptionName: 'Third Screen',
                screenToNavigate: 'Screen3',
            },
            {
                navOptionThumb: 'book',
                navOptionName: 'المكتبة',
                screenToNavigate: 'Screen1',
            },
            {
                navOptionThumb: 'user',
                navOptionName: 'الطلبة',
                screenToNavigate: 'Screen2',
            },
            {
                navOptionThumb: 'bus',
                navOptionName: 'الرحلات',
                screenToNavigate: 'Screen3',
            },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={{ uri: this.proileImage }}
                    style={styles.sideMenuProfileIcon}
                />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <TouchableHighlight onPress={() => {
                            global.currentScreenIndex = key;
                            this.props.navigation.navigate(item.screenToNavigate);
                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    backgroundColor: global.currentScreenIndex === key ? '#ccc' : '#fff',
                                }}>



                                <View style={{ marginRight: 10, marginLeft: 20 }}>
                                    <Icon name={item.navOptionThumb} size={25} color="#808080" />
                                </View>


                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: global.currentScreenIndex === key ? 'red' : 'black',
                                    }}
                                >
                                    {item.navOptionName}
                                </Text>
                            </View>
                        </TouchableHighlight>

                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});
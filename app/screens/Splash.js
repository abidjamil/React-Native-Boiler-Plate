import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SplashPage extends Component {

    UNSAFE_componentWillMount() {

        setTimeout(() => {
        this.props.navigation.navigate('Home'); 
        }, 2000);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#666565', alignItems: 'center', justifyContent: 'center' }}>
               
               <Text>Next Survey</Text>
               
            </View>
        );
    }
}

module.exports = SplashPage;
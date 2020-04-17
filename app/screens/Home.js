import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {Configurations} from '../config'


export default class Main extends Component {

    render(){
        return (
           <Text> Api_URL {Configurations.API_URL}  </Text>
        );
    }
}
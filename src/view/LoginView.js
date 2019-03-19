import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { email, password } = this.props.store;
        return <View style={styles.container}>
            <Text>{email}</Text>
        </View>
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
}
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../common';

class SpinSuccess extends Component {
    render() {
        return (
            <Card>
                <CardSection style={styles.successCardStyle}>
                    <Text style={styles.textStyle}>
                        Success!!
                    </Text>
                </CardSection>

                <CardSection style={styles.successCardStyle}>
                    <Text style={styles.pointStyle}>
                        You have earned 100 points!!!
                    </Text>
                </CardSection>
            </Card>
        );
    }
} 

export default SpinSuccess;

const styles = {
    textStyle: {
        fontSize: 40,
        alignSelf: 'center',
        color: 'green',
    },
    pointStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'blue'
    },
    successCardStyle: {
        justifyContent : 'center'
    }
}
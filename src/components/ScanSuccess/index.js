import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import { Card, CardSection, Button } from '../common';
import { connect } from 'react-redux';

class ScanSuccess extends Component {
    render() {
        return (
            <Card>
                <CardSection style={styles.successCardStyle}>
                    <Text style={styles.textStyle}>
                        Success!!
                    </Text>
                    
                </CardSection>
                <CardSection>
                    <Text style={styles.codeStyle}>
                        {this.props.scannedList.scannedItem}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.props.navigation.replace("Scan")}>Scan Agaian</Button>
                </CardSection>
            </Card>
        );
    }
}

mapStateToProps = state => {
    const { scannedList, scannedItem, auth } = state;
    return { scannedList, scannedItem, auth };
}

export default connect(mapStateToProps)(ScanSuccess);

const styles = {
    textStyle: {
        fontSize: 40,
        alignSelf: 'center',
        color: 'green',
    },
    codeStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'blue'
    },
    successCardStyle: {
        justifyContent : 'center'
    }
}
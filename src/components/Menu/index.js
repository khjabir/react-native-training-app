import React, {Component} from 'react';
import { NetInfo, ToastAndroid } from 'react-native';
import { Card, CardSection, Button } from '../common';
import { connect } from 'react-redux';
import { networkStatusChanged } from '../../actions';

class Menu extends Component {

    constructor() {
        super();
        // NetInfo.isConnected.fetch().then(isConnected => {
        //     console.log('Network, is ' + (isConnected ? 'online' : 'offline'));
        //     ToastAndroid.show('Network, is ' + (isConnected ? 'online' : 'offline'), ToastAndroid.LONG);
        //   });
          handleFirstConnectivityChange = (isConnected) => {
            console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
            ToastAndroid.show('Network, is ' + (isConnected ? 'online' : 'offline'), ToastAndroid.LONG);
            this.props.networkStatusChanged(isConnected);
            // NetInfo.isConnected.removeEventListener(
            //   'connectionChange',
            //   handleFirstConnectivityChange
            // );
          }
          NetInfo.isConnected.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
          );
    }

    goToScanScreen = () => {
        this.props.navigation.navigate('Scan');
    }

    goToSpinScreen = () => {
        this.props.navigation.navigate('SpinWheel');
    }

    

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.goToScanScreen}>Scan</Button>
                    <Button>Redeem</Button>
                    <Button onPress={this.goToSpinScreen}>Spin</Button>
                </CardSection>
            </Card>
        )
    }
}

export default connect(null, { networkStatusChanged })(Menu);
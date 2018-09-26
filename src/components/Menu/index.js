import React, {Component} from 'react';
import { Card, CardSection, Button } from '../common';

class Menu extends Component {

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

export default Menu;
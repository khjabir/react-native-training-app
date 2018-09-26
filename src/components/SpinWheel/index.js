import React, { Component } from 'react';
import { Image, ToastAndroid } from 'react-native';
import { Card, CardSection, Button } from '../common';
import SpinView from '../common/SpinView';
import wheel from '../../assets/images/wheel.png';
import { connect } from 'react-redux';
import { styles } from './styles';
import { spinTheWheel } from '../../actions';

class SpinWheel extends Component {

    onSpinButtonClick = () => {
        this.props.spinTheWheel(true);
    }

    finishedSpinning = () => {
        ToastAndroid.show("Spinning Finished", ToastAndroid.LONG);
        setTimeout(() => {
            this.props.navigation.replace("SpinSuccess");
        }, 2000);
        this.props.spinTheWheel(false);
    }

    render() {
        const { wheelStyle, wheelContainer } = styles;

        return(
            <Card>
                <CardSection style={ wheelContainer }>
                    <SpinView onFinishedAnimating={this.finishedSpinning}>
                        <Image source={ wheel } style={ wheelStyle }/>
                    </SpinView>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onSpinButtonClick}>Spin</Button>
                </CardSection>
            </Card>
        )
    }
}

export default connect(null, { spinTheWheel })(SpinWheel);
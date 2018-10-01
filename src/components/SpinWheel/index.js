import React, { Component } from 'react';
import { View, Image, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection, Button } from '../common';
import SpinView from '../common/SpinView';
import wheel from '../../assets/images/wheel.png';
import { connect } from 'react-redux';
import { styles } from './styles';
import { spinTheWheel } from '../../actions';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';

class SpinWheel extends Component {

    onSpinButtonClick = () => { 
        if(!this.props.isSpinning && !this.props.lastSpinnedDate) {
            this.props.spinTheWheel(true);
            PlaySoundRepeat('tick');
        }
    }

    finishedSpinning = () => {
        ToastAndroid.show("Spinning Finished", ToastAndroid.LONG);
        StopSound();
        setTimeout(() => {
            this.props.navigation.replace("SpinSuccess");
        }, 2000);
        this.props.spinTheWheel(false);
    }

    renderButton = () => {
        if(this.props.isSpinning) {
            return (
                <Button>Spinning {this.props.isOnline ? 'Online' : 'Offline'}</Button>
            );
        }
        else if(this.props.lastSpinnedDate) {
            return (
                <Button>Come Back Tomorrow!!</Button>
            );
        }
        
        return (
            <Button onPress={this.onSpinButtonClick}>Spin</Button>
        );
    }

    render() {
        const { wheelStyle, wheelContainer } = styles;

        return(
            <Card>
                <CardSection style={ wheelContainer }>
                    <TouchableWithoutFeedback onPress={this.onSpinButtonClick}>
                        <View>
                            <SpinView onFinishedAnimating={this.finishedSpinning}>
                                <Image source={ wheel } style={ wheelStyle }/>
                                {/* <Image source={ {uri: 'https://banner2.kisspng.com/20180411/pvw/kisspng-wheel-of-fortune-2-game-show-sword-art-online-fat-wheel-5ace34029c8f01.8674029715234631706413.jpg'} } style={ wheelStyle }/> */}
                            </SpinView>
                        </View>
                    </TouchableWithoutFeedback>
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

mapStateToProps = state => {
    const { lastSpinnedDate, isSpinning } = state.spin;
    const { isOnline } = state.common;
    return { lastSpinnedDate, isSpinning, isOnline };
}
export default connect(mapStateToProps, { spinTheWheel })(SpinWheel);
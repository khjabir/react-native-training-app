import React from 'react';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

class SpinView extends React.Component {
  state = {
    spinValue: new Animated.Value(0)
  }

  componentDidUpdate() {
      if(this.props.isSpinning) {
          Animated.timing( 
              this.state.spinValue,
              {
                  toValue: 1,
                  duration: 20000,
                  easing: Easing.bezier(0, 1, 0, 1)
              }
          ).start(this.props.onFinishedAnimating);
      }
  }

  render() {
    const { spinValue } = this.state;

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360240deg']
    });

    return (
      <Animated.View 
        style={{
          ...this.props.style,
          transform: [{ rotate: spin }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

mapStateToProps = state => {
    const { isSpinning } = state.spin;
    return { isSpinning };
}

export default connect(mapStateToProps)(SpinView);

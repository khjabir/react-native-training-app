import React, {Component} from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { styles } from './styles'

class LoginForm extends Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
        console.log(text);
    }

    loginPressed = () => {
        const { email, password, navigation } = this.props;
        this.props.loginUser({ email, password, navigation });
    }

    renderError = () => {
        const { errorContainerStyle, errorTextStyle } = styles;
        if(this.props.error) {
            return (
                <View style={ errorContainerStyle }>
                    <Text style={ errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return(
                <Spinner size="large"/>
            );
        }

        return(
            <Button onPress = {this.loginPressed}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label = 'Email'
                        placeholder = 'user@email.com'
                        onChangeText = {this.onEmailChange} 
                        value = {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label = 'Password'
                        placeholder = '*********'
                        secureTextEntry 
                        onChangeText = {this.onPasswordChange}
                        value = { this.props.password }
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        ) 
    }
}

mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return { email, password, error, loading }
}

export default connect(mapStateToProps, actions)(LoginForm);
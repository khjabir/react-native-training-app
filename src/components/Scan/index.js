import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from 'react-redux';
import { scanSuccess } from '../../actions';

class Scan extends Component {

    onSuccess = (e) => {
        if(this.validQR(e.data)) {
            ToastAndroid.show('Success', ToastAndroid.LONG);
            this.props.scanSuccess(e.data) ;
            this.props.navigation.replace('ScanSuccess');
        } else {
            ToastAndroid.show('Invalid QR', ToastAndroid.LONG);
            setTimeout(() => {
                this.scanner.reactivate();
            }, 2500);
        }
    }

    validQR = (data) => {
        return (data.length === 26 && data.startsWith("WC"))
    } 

    scanAgain = () => {
        this.scanner.reactivate();
    }

    renderCustomMarker = () => {
        return (
            <View style={styles.rectangleContainer}>
                <View style={[styles.rectangle, this.props.markerStyle ? this.props.markerStyle : null]}>
                <View
                    style={{
                        borderBottomColor: 'green',
                        borderBottomWidth: 10,
                    }}
                />
                </View>
            </View>
        );
    }

    render() {
        return(
            <QRCodeScanner
                showMarker
                customMarker={this.renderCustomMarker()}
                onRead={this.onSuccess}
                ref={(node) => { this.scanner = node }}
            />
        );
    }
}

export default connect(null, { scanSuccess })(Scan);

const styles = {
    rectangleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
  
    rectangle: {
      height: 250,
      width: 250,
      borderWidth: 2,
      borderColor: 'red',
      backgroundColor: 'transparent',
    },
  };



/* QRCodeScanner Additional Props
    // // <QRCodeScanner
    // //     onRead={this.onSuccess}
    // //     ref={(node) => { this.scanner = node }}
    // //     topContent={
    // //         <Text style={styles.centerText}>
    // //             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
    // //         </Text>
    // //     }
    // //     bottomContent={
    // //     <TouchableOpacity style={styles.buttonTouchable} onPress={this.scanAgain}>
    // //         <Text style={styles.buttonText}>Scan Again</Text>
    // //     </TouchableOpacity>
    // //     }
    // // />
QRCodeScanner Additional Props */

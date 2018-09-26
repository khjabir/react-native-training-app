import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
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

    render() {
        return(
            <QRCodeScanner
                onRead={this.onSuccess}
                ref={(node) => { this.scanner = node }}
            />
        );
    }
}

export default connect(null, { scanSuccess })(Scan);



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

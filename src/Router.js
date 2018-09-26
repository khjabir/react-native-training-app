/*react-navigation implementation*/
import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Scan from './components/Scan';
import ScanSuccess from './components/ScanSuccess';
import SpinWheel from './components/SpinWheel';
import SpinSuccess from './components/SpinSuccess';

export default createStackNavigator( {
    Login: {
        screen: LoginForm,
        navigationOptions: () => ({
            title: 'Login',
        })
    },
    Menu: { screen: Menu },
    Scan: { screen: Scan },
    ScanSuccess: { screen: ScanSuccess },
    SpinWheel: {screen: SpinWheel},
    SpinSuccess: { screen: SpinSuccess }
},
{
    initialRouteName: 'Menu'
}
);

/*react-navigation implementation*/



/* react-native-router-flux implementation
    // // import React from 'react';
    // // import { Scene, Router } from 'react-native-router-flux';
    // // import LoginForm from './components/LoginForm';
    // // import EmployeeList from './components/EmployeeList';

    // // const RouterComponent = () => {
    // //     return (
    // //         <Router>
    // //             <Scene key="root">
    // //                 <Scene key="login" component={LoginForm} title="Please Login" initial/>
    // //                 <Scene key="employeeList" component={EmployeeList} title="Employees" />
    // //             </Scene>
    // //         </Router>

    // //     );
    // // };

    // // export default RouterComponent;
*/
// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { Navigation } from "react-native-navigation";

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

Navigation.registerComponent('app.HomeScreen', () => Home);
Navigation.registerComponent('app.LoginScreen', () => Login);
Navigation.registerComponent('app.RegisterScreen', () => Register);

Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        component: {
          name: 'app.HomeScreen'
        },
      },
      center: {
        bottomTabs: {
          children: [
            {
              component: {
                name: 'app.HomeScreen',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    textColor: '#85c1e9',
                    iconColor: '#85c1e9',
                    selectedIconColor: '#1b4f72',
                    selectedTextColor: '#1b4f72',
                    text: 'Home',
                    icon: require('./static/icon/profileIcon.png')
                  }
                }
              }
            },
            {
              component: {
                name: 'app.LoginScreen',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    textColor: '#85c1e9',
                    iconColor: '#85c1e9',
                    selectedIconColor: '#1b4f72',
                    selectedTextColor: '#1b4f72',
                    text: 'Login',
                    icon: require('./static/icon/profileIcon.png')
                  }
                }
              }
            },

            {
              component: {
                name: 'app.RegisterScreen',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    textColor: '#85c1e9',
                    iconColor: '#85c1e9',
                    selectedIconColor: '#1b4f72',
                    selectedTextColor: '#1b4f72',
                    text: 'Register',
                    icon: require('./static/icon/profileIcon.png')
                  }
                }
              }
            }
          ],
        }
      }
    }
  }
});
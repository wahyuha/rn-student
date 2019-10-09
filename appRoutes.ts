import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

import HomeInterface from './src/interfaces/screens/Home';
import LoginInterface from './src/interfaces/screens/Login';

interface appRoutesProps {
  component: React.FC<HomeInterface> | React.FC<LoginInterface> | React.FC<{}>,
  exact?: Boolean;
  key?: String;
  path: String;
}

const appRoutes: appRoutesProps[] = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Login,
    path: '/login',
  },
  {
    component: Register,
    path: '/register',
  },
];

export default appRoutes;
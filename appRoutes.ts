import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

import HomeInterface from './interfaces/screens/Home';
import LoginInterface from './interfaces/screens/Login';

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
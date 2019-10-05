/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  NativeRouter,
  Route,
} from 'react-router-native';
import appRoutes from './appRoutes';

const App = () => (
  <NativeRouter>
    {appRoutes.map((route: any, key: any) => (
      <Route
        component={route.component}
        exact={route.exact}
        key={key}
        path={route.path}
      />
    ))}
  </NativeRouter>
);

export default App;

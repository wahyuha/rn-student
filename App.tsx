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
  BackButton,
  NativeRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-native';
import AnimatedChild from './src/components/AnimatedChild';
import appRoutes from './appRoutes';
import { Animated } from 'react-native';

const AppEntry = withRouter((props: any) => {
  const {
    location,
    match,
  } = props;
  const anim = new Animated.Value(0);
  return (
    <AnimatedChild
      anim={anim}
      atParent={match.isExact}
      url={location.pathname}
    >
      <Switch location={location}>
        {appRoutes.map((route: any, key: any) => (
          <Route
            component={route.component}
            exact={route.exact}
            key={key}
            path={route.path}
          />
        ))}
      </Switch>
    </AnimatedChild>
  );
});

const App = () => (
  <NativeRouter>
    <BackButton>
      <AppEntry />
    </BackButton>
  </NativeRouter>
);

export default App;

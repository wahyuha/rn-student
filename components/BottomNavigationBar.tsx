import React from 'react';
import {
  Link,
  Route,
  withRouter,
} from 'react-router-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TabMenu = ({ activeOnlyWhenExact, children, style, to }: any) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <View style={style}>
          <Link to={to}>
            <Text style={{ color: match ? 'blue' : '#222' }}>
              {children}
            </Text>
          </Link>
        </View>
      )}
    />
  );
}

const BottomNavigationBar: React.FC<any> = () => {
  const menus = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Profil',
      path: '/login',
    },
    {
      label: 'Status',
      path: '/status',
    },
    {
      label: 'Pengaturan',
      path: '/settings',
    },
  ];
  return (
    <View style={styles.root}>
      {menus.map((menu: any) => (
        <TabMenu to={menu.path} style={styles.menu} key={menu.path}>{menu.label}</TabMenu>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    bottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default React.memo(withRouter(BottomNavigationBar));
import React from 'react';
import { Link, withRouter } from 'react-router-native';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const BottomNavigationBar: React.FC<any> = (props: any) => {
  const {
    match,
  } = props;
  const menus = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Profil',
      path: '/profil',
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
        <View style={styles.menu} key={menu.path}>
          <Link to={menu.path}><Text style={{ color: match.url === menu.path ? 'blue' : '#222' }}>{menu.label}</Text></Link>
        </View>
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

export default withRouter(BottomNavigationBar);
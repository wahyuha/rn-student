import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from 'react-router-native';
import LoginProps from '../interfaces/screens/Login';

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const {
    history,
  } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    const st = setTimeout(() => {
      setIsSubmitting(false);
      history.push('/');
      clearTimeout(st);
    }, 1000);
  }
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15, }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}
          >
            <Text style={{ fontSize: 30 }}>Sign In</Text>
          </View>
          <View
            style={{ width: '100%', borderColor: 'gray', borderWidth: 1, padding: 10, margin: 5 }}
          >
            <TextInput
              placeholder="Email"
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View
            style={{ width: '100%', borderColor: 'gray', borderWidth: 1, padding: 10, margin: 5 }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button
            color="darkblue"
            title={isSubmitting ? 'Signing In...' : 'Sign In'}
            onPress={handleSubmit}
            disabled={email === '' || password === '' || isSubmitting}
          />
          <View style={{ marginTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>Antum lupa password?</Text>
            <Link to="/register"><Text style={{ color: 'blue' }}>Klik disini</Text></Link>
          </View>
          <View style={{ marginTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>Antum tidak mempunyai akun?</Text>
            <Link to="/register"><Text style={{ color: 'blue' }}>Klik disini</Text></Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

// styles
const styles = StyleSheet.create({

});

export default Login;
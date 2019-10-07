import React from 'react';
import {
  Alert,
  Button,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from 'react-router-native';
import useAnimation from '../helpers/useAnimation';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    const st = setTimeout(() => {
      setIsSubmitting(false);
      sendWhatsAppMessage('whatsapp://send?text=hello&phone=xxxxxxxxxxxxx');
      clearTimeout(st);
    }, 1000);
  }

  const sendWhatsAppMessage = (link: string) => {
    if (link) {
      Linking.canOpenURL(link)
        .then(supported => {
          if (!supported) {
            Alert.alert(
              'Please install whats app to send direct message to students via WhasApp'
            );
          } else {
            return Linking.openURL(link);
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
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
            <Text style={{ fontSize: 30 }}>Register</Text>
          </View>
          <View
            style={{ width: '100%', borderColor: 'gray', borderWidth: 1, padding: 10, margin: 5 }}
          >
            <TextInput
              placeholder="Name"
              onChangeText={text => setName(text)}
            />
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
              placeholder="Phone"
              onChangeText={text => setPhone(text)}
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
          <View
            style={{ width: '100%', borderColor: 'gray', borderWidth: 1, padding: 10, margin: 5 }}
          >
            <TextInput
              placeholder="Repeat your password"
              secureTextEntry
              onChangeText={text => setRepassword(text)}
            />
          </View>
          <Button
            color="darkblue"
            title={isSubmitting ? 'Registering...' : 'Register'}
            onPress={handleSubmit}
            disabled={email === '' || password === '' || isSubmitting}
          />
          <View style={{ marginTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>Antum Sudah punya akun?</Text>
            <Link to="/login"><Text style={{ color: 'blue' }}>Klik disini</Text></Link>
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
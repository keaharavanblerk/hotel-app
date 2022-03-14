import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { firebase } from './firebase/config';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Logged = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                alert('Logged in');
                var user = userCredential.user;
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setUsername(email)}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
            />
            <Button title="Login" onPress={Logged} />
            <View style={styles.button}>
                {' '}
                <Button
                    title="Signup"
                    onPress={() => navigation.navigate('Signup')}
                    style={{ marginTop: 8 }}
                />
                <Button
                    title="Forgot Password"
                    onPress={() => navigation.navigate('ForgotPassword')}
                    style={{ marginTop: 150, marginBottom: 8 }}
                />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    input: {
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#366AAA',
        marginTop: 5,
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#E5E5E5',
    },
    button: {
        marginTop: 8,
    },
    container: {
        backgroundColor: '#366AAA',
        height: '100vh',
    },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  //valida email
  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  const handleRecoverPassword = (text) => {
    if(validarEmail(text)) {
      setSucessoMessage('Email enviado com sucesso!')
      setErrorMessage('');
    } else {
      setSucessoMessage('');
      setErrorMessage('E-mail parece ser inválido');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Recuperação de senha</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRecoverPassword(email)}
        >
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor: 'darkslateblue',
    height: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: 160,
  },
  input: {
    width: '60%',
    marginBottom: 2,
    backgroundColor: 'white',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  errorMessage: {
    color: 'tomato',
    marginBottom: 10,
    fontSize: 30
  },
  sucessoMessage: {
    color: 'limegreen',
    marginBottom: 10,
    fontSize: 30
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ForgotPassword
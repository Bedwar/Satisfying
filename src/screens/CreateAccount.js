import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateAccount = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  const validarSenha = (senha, repeteSenha) => {
    return senha != '' && repeteSenha != '' && senha == repeteSenha;
  };

  const handleRegister = (email, senha, repeteSenha) => {
    if(validarEmail(email)) {
      if(validarSenha(senha, repeteSenha)) {
        setSucessoMessage('Cadastro realizado com sucesso! (TESTE)')
        setErrorMessage('');
      } else {
        setSucessoMessage('');
        setErrorMessage('O campo repetir senha difere da senha');
      }
    } else {
      setSucessoMessage('');
      setErrorMessage('E-mail e/ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova conta</Text>
      </View>
      <View style={styles.content}>
       <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.label}>Repetir senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetir senha"
          secureTextEntry
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {handleRegister(email, password, repeatPassword)}}
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
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
    marginBottom: 5,
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
    fontSize: 30
  },
  sucessoMessage: {
    color: 'limegreen',
    fontSize: 30
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default CreateAccount;
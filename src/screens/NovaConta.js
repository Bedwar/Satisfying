import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles';

const NovaConta = (props) => {
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
    setErrorMessage('');
    setSucessoMessage('');
    if(validarEmail(email)) {
      if(validarSenha(senha, repeteSenha)) {
        setSucessoMessage('Cadastro realizado com sucesso!')
      } else {
        setErrorMessage('O campo repetir senha difere da senha');
      }
    } else {
      setErrorMessage('E-mail e/ou senha inválidos');
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={globalStyles.header}>Nova conta</Text>
      </View>


      <View style={globalStyles.area}>
       <Text style={globalStyles.label}>E-mail</Text>
        <TextInput
          style={globalStyles.inputs}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={globalStyles.label}>Senha</Text>
        <TextInput
          style={globalStyles.inputs}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={globalStyles.label}>Repetir senha</Text>
        <TextInput
          style={globalStyles.inputs}
          placeholder="Repetir senha"
          secureTextEntry
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
        />
        {errorMessage ? <Text style={globalStyles.errorText}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={globalStyles.sucessoMessage}>{sucessoMessage}</Text> : null}
       
      </View>
      <TouchableOpacity
          style={globalStyles.button}
          onPress={() => {handleRegister(email, password, repeatPassword)}}
        >
          <Text style={globalStyles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
    </View>
  );
};


export default NovaConta;

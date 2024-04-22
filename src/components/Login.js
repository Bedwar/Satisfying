import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ onCreateAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setErrorMessage('E-mail e/ou senha inválidos.');
  };

  const handleCreateAccountPress = () => {
    // Chama a função fornecida pelo prop onCreateAccount
    onCreateAccount();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6A5ACD' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Satisfying.you 😊</Text>
      <TextInput
        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={{ backgroundColor: '#00FF7F', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        onPress={handleCreateAccountPress} // Adiciona o onPress para chamar a função handleCreateAccountPress
      >
        <Text style={{ color: 'white' }}>Criar minha conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
      >
        <Text style={{ color: 'white' }}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

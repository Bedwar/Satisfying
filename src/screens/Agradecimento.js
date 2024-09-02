import { React, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Agradecimento = ({ navigation }) => {
    
    useEffect(() => {
    const timer = setTimeout(() => {
        navigation.goBack(); 
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.question}>Obrigado por participar da pesquisa!</Text>
            <Text style={styles.question}>Aguardamos voce no próximo ano!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#483d8b',
  },
  question: {
    fontSize: 22,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  }
});

export default Agradecimento;

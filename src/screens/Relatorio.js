import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles';
import relatorioStyles from '../styles/screens/relatorioStyles' ;


const Relatorio = (props) => {
  
  return (
    <View style={relatorioStyles.container}>

        <View style={relatorioStyles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={relatorioStyles.title}>Relatório</Text>
        </View>
        <View style={relatorioStyles.image}>
      <Image source={require('../../assets/images/chart.png')} 
      />
      </View>
  
       
    </View>
  );
};

export default Relatorio;

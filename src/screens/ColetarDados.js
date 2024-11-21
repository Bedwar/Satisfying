import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import collectDataStyles from '../styles/screens/collectDataStyles';

const Coleta = props => {
  const research = props.route.params.research;
  const titulo = research.title;

  const handleOptionSelect = option => {
    props.navigation.navigate('Agradecimento');
    setTimeout(
      () => props.navigation.navigate('AcoesPesquisa', {research: research}),
      3000,
    );
  };

  return (
    <View style={collectDataStyles.container}>
      <Text style={collectDataStyles.question}>
        O que você achou do {titulo}?
      </Text>
      <View style={collectDataStyles.optionsContainer}>
        <TouchableOpacity
          style={collectDataStyles.optionButton}
          onPress={() => handleOptionSelect('pessimo')}>
          <Icon name="emoticon-cry-outline" size={50} color="red" />
          <Text style={collectDataStyles.optionText}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={collectDataStyles.optionButton}
          onPress={() => handleOptionSelect('ruim')}>
          <Icon name="emoticon-sad-outline" size={50} color="#ff6347" />
          <Text style={collectDataStyles.optionText}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={collectDataStyles.optionButton}
          onPress={() => handleOptionSelect('neutro')}>
          <Icon name="emoticon-neutral-outline" size={50} color="#ffd700" />
          <Text style={collectDataStyles.optionText}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={collectDataStyles.optionButton}
          onPress={() => handleOptionSelect('bom')}>
          <Icon name="emoticon-happy-outline" size={50} color="chartreuse" />
          <Text style={collectDataStyles.optionText}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={collectDataStyles.optionButton}
          onPress={() => handleOptionSelect('excelente')}>
          <Icon name="emoticon-excited-outline" size={50} color="#32cd32" />
          <Text style={collectDataStyles.optionText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coleta;

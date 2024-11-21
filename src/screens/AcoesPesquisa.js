import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import globalStyles from '../styles/globalStyles';
import researchActionsStyles from '../styles/screens/researchActionsStyles';

const AcoesPesquisa = props => {
  const research = props.route.params.research;
  const titulo = research.title;

  return (
    <View style={researchActionsStyles.container}>
      <View style={researchActionsStyles.header}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon
            name="arrow-back"
            size={30}
            style={researchActionsStyles.headerImg}
          />
        </TouchableOpacity>
        <Text style={researchActionsStyles.title}>{titulo}</Text>
      </View>

      <View style={researchActionsStyles.content}>
        <TouchableOpacity
          style={researchActionsStyles.button}
          onPress={() =>
            props.navigation.navigate('ModificarPesquisa', {research: research})
          }>
          <Icon name="edit-document" size={30} color="white" />
          <Text style={globalStyles.buttonText}>Modificar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={researchActionsStyles.button}
          onPress={() =>
            props.navigation.navigate('Coleta', {research: research})
          }>
          <Icon name="library-add-check" size={30} color="white" />
          <Text style={globalStyles.buttonText}>Coletar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={researchActionsStyles.button}
          onPress={() => props.navigation.navigate('Relatorio')}>
          <Icon name="donut-large" size={30} color="white" />
          <Text style={globalStyles.buttonText}>Relatório</Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

export default AcoesPesquisa;

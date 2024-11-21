import React from 'react';
import { Text, View } from 'react-native';

import thanksStyles from '../styles/screens/thanksStyles';

const Agradecimento = () => {
  return (
    <View style={thanksStyles.container}>
      <Text style={thanksStyles.title}>
        Obrigado por participar da pesquisa!
      </Text>
      <Text style={thanksStyles.title}>Aguardamos você no próximo ano!</Text>
    </View>
  );
};

export default Agradecimento;

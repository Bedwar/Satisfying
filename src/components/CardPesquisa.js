import React from 'react';
import { Card, Text } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

export default function CardPesquisa({ item: research }) {
  return (
    <Card>
      <Card.Cover source={research.image} style={globalStyles.cardImage} resizeMode="contain" />
      <Card.Content>
        <Text variant="titleLarge" style={[globalStyles.title, { color: '#3F92C5' }]}>{research.title}</Text>
        <Text variant="bodyMedium" style={globalStyles.date}>{research.date}</Text>
      </Card.Content>
    </Card>
  );
}

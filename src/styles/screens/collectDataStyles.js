import {StyleSheet} from 'react-native';
import {colors} from '../globalStyles';

const collectDataStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    gap: 80,
  },

  question: {
    color: colors.text,
    fontSize: 20,
  },

  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  optionButton: {
    display: 'flex',
    alignItems: 'center',
  },

  optionText: {
    color: '#fff',
  },
});

export default collectDataStyles;

import {StyleSheet} from 'react-native';

import {colors} from '../globalStyles';

const thanksStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },

  title: {
    fontSize: 22,
    color: colors.text,
  },
});

export default thanksStyles;
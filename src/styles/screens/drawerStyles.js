import {StyleSheet} from 'react-native';
import {colors, fonts} from '../globalStyles';

const drawerStyles = StyleSheet.create({
  drawerContainer: {
    height: '100%',
    display: 'flex',
  },

  emailContainer: {
    height: '35%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emailText: {
    fontSize: 22,
    color: colors.text,
  },

  separator: {
    height: 1,
    backgroundColor: colors.text,
    marginHorizontal: 24,
  },

  drawerItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'purple',
    alignItems: 'center',
  },

  labelSair: {
    fontFamily: fonts.regular,
  },

  label: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
    textAlignVertical: 'center',
  },
});

export default drawerStyles;

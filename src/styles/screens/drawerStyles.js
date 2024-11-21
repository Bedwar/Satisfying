import {StyleSheet} from 'react-native';
import {colors, fonts} from '../globalStyles';

const drawerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
  },

  emailHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.text,
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  }

});

export default drawerStyles;
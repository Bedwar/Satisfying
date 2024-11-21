import {StyleSheet} from 'react-native';
import {colors, fonts} from '../globalStyles';

const newAccStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  header: {
    display: 'flex',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    backgroundColor: colors.darkerBackground,
    width: '100%',
    paddingVertical: 16,
  },

  headerImg: {
    marginLeft: 14,
    color: colors.goBackBlue,
  },

  button: {
    backgroundColor: colors.btnGreen,
    width: '80%',
    marginBottom: 26,
  },

  buttonText: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 28,
    marginVertical: 8,
  },

});

export default newAccStyles;

import {StyleSheet} from 'react-native';
import {colors, fonts} from '../globalStyles';

const recSenhaStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    // padding: spacing.large,
  },

  header: {
    display: 'flex',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    fontFamily: fonts.bold,
    color: colors.text,
    //marginBottom: spacing.large,
    backgroundColor: colors.darkerBackground,
    width: '100%',
    paddingVertical: 16,
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

export default recSenhaStyles;

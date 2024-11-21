import {StyleSheet} from 'react-native';
import {colors, fonts, spacing} from '../globalStyles';

const researchActionsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    // padding: spacing.large,
  },

  header: {
    display: 'flex',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.large,
    backgroundColor: colors.darkerBackground,
    width: '100%',
    paddingVertical: 16,
  },

  headerImg: {
    marginLeft: 14,
    color: colors.goBackBlue,
  },

  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
  },

  title: {
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 36,
    color: colors.text,
  },

  btnContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 26,
    flexDirection: 'row',
    paddingHorizontal: spacing.large,
    gap: 18,
  },

  button: {
    backgroundColor: colors.darkerBackground,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 28,
    marginVertical: 8,
  },

  imageTouchable: {
    backgroundColor: colors.text,
    display: 'flex',
    alignItems: 'center',
  },

  imageButtonText: {
    color: '#939393',
    fontSize: 20,
    paddingVertical: 35,
  },
});

export default researchActionsStyles;

import {StyleSheet} from 'react-native';
import {colors, fonts, spacing} from '../globalStyles';

const relatorioStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    // padding: spacing.large,
  },

  header: {
    paddingLeft: 10,
    display: 'flex',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    fontFamily: fonts.bold,
    color: colors.text,
    //marginBottom: spacing.large,
    backgroundColor: colors.darkerBackground,
    width: '100%',
    paddingVertical: 16,
  },

  content: {
    height: '90%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },

  title: {
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 36,
    color: colors.text,
  },

});

export default relatorioStyles;

import {StyleSheet} from 'react-native';
import {colors, fonts, spacing} from '../globalStyles';

const relatorioStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },
image: {
    width: '80%',  
    height: '80%',
  },
  title: {
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 36,
    color: colors.text,
  },

});

export default relatorioStyles;

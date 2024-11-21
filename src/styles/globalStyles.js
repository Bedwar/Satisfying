import {StyleSheet} from 'react-native';
import {grey100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const colors = {
  erro: 'tomato',
  background: '#372775',
  text: '#FFFFFF',
  azul: '#4dc6e8',
  verde: '#5cdb95',
  darkerBackground: '#2B1D62',
  btnGreen: '#37BD6D',
  placeholder: '#939393',
  goBackBlue: '#573FBA',
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const fonts = {
  regular: 'AveriaLibre-Regular',
  bold: 'AveriaLibre-Bold',
  italic: 'AveriaLibre-Italic',
};

const globalStyles = StyleSheet.create({
  // Estilos globais para telas
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.large,
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.large,
    alignItems: 'center',
    gap: 30,
    backgroundColor: colors.darkerBackground,
    width: '100%',
    paddingVertical: 16,
  },

  headerLogin: {
    justifyContent:'flex-start',
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.large,
  },

  headerImg: {
    marginLeft: 14,
    color: colors.goBackBlue,
  },

  label: {
    justifyContent: 'flex-start',
    fontSize: 18,
    color: colors.text,
    fontFamily: fonts.regular,
  },

  inputs: {
    width: '93%',
    color: colors.azul,
    backgroundColor: colors.text,
    fontFamily: fonts.regular,
    borderRadius: 1,
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 0,
  },

  area: {
    marginLeft: 18,
    //backgroundColor:'red',
    width: '100%',
    paddingHorizontal: spacing.medium,
    marginBottom: spacing.medium,
  },

  button: {
    backgroundColor: colors.verde,
    borderRadius: 1,
    width: '85%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonNc: {
    backgroundColor: colors.azul,
    borderRadius: 1,
    width: '85%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },

  buttonRs: {
    backgroundColor: '#B0CCDE',
    borderRadius: 1,
    width: '85%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: colors.text,
    fontSize: 20,
    fontFamily: fonts.regular,
  },

  errorText: {
    fontSize: 14,
    color: colors.erro,
  },
  linksContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },

  researchCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 271,
    height: 238,
    backgroundColor: 'white',
    marginRight: 49,
    borderRadius: 10,
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImage: {
    width: 120,
    height: 120,
    marginTop: 26,
  },

  title: {
    fontSize: 16,
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 36,
    marginTop: 15,
    color: colors.text,
  },

  date: {
    textAlign: 'center',
  },

  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 9,
  },

  searchBar: {
    backgroundColor: colors.text,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },

  inputText: {
    fontFamily: fonts.regular,
    color: 'black',
    lineHeight: 50,
    fontSize: 20,
  },
});

export default globalStyles;

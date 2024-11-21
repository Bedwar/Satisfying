import {StyleSheet} from 'react-native';
import {colors, fonts, spacing} from '../globalStyles';

const changeSearchStyles = StyleSheet.create({
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
    alignItems: 'center',
    padding: spacing.large,
  },

  title: {
    lineHeight: 36,
    fontFamily: fonts.regular,
    fontSize: 36,
    color: colors.text,
  },

  inputWrapper: {
    // backgroundColor: 'red',
    width: '100%',
  },

  label: {
    fontSize: 16,
    lineHeight: 36,
    fontFamily: fonts.regular,
    color: colors.text,
    fontSize: 30,
    marginTop: 15,
    display: 'flex',
    alignSelf: 'flex-start',
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

  button1: {
    // backgroundColor: colors.btnGreen,
    width: '75%',
    backgroundColor: colors.btnGreen,
  },

  button2: {
    width: '20%',
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

  modalContent: {
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.background,
    width: 350,
    height: 175,
    padding: 25,
    alignContent: 'space-between',
    justifyContent: 'space-between'
  },
  modalText: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: 22,
    textAlign: 'center'
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  modalButton: {
    width: '45%',
    height: 45,
    justifyContent: 'center'

  },
  modalButtonText: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default changeSearchStyles;

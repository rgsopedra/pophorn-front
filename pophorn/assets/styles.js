import { StyleSheet } from 'react-native'
import colors from '../constants/Colors'

/**
 * Add here global styles with the element id
 */
export default StyleSheet.create({
  // Backgrounds
  background: {
    flex: 1,
    flexGrow: 1
  },
  container: {
    flex: 1,
    flexGrow: 1,
    margin: 30,
    marginTop: 50
  },
  titleContainer: {
    marginBottom: 30
  },
  // Texts
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 5,
    color: colors.white,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: colors.white
  },
  // Buttons
  submitButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  submitButton: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 8,
    elevation: 4,
    padding: 10
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center'
  },
  disabledButton:{
    opacity: 0.5
  },
  // Inputs
  inputLabel: {
    color: colors.primary
  },
  input: {
    color: colors.white,
    fontSize: 16
  },
  inputContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1
  },
  inputError: {
    color: colors.primary,
    marginLeft: 0
  },
  // Picker
  picker: {
    height: 40,
    width: 120,
    color: colors.white,
    padding: 2
  },
  pickerLabel: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 7
  },
  // Checkboxes
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  checkbox: {
    color: 'white'
  }
})

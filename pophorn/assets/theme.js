
/**
 * Add here global styles and properties for elements
 */
import globalStyles from './styles'
import colors from '../constants/Colors'

export default {
  CheckBox: {
    checkedColor: '#EB1F5A',
    containerStyle: globalStyles.checkboxContainer,
    textStyle: globalStyles.checkbox
  },
  Button: {
    raised: true,
    buttonStyle: globalStyles.submitButton,
    titleStyle: globalStyles.submitButtonText
  },
  Input: {
    labelStyle: globalStyles.inputLabel,
    inputStyle: globalStyles.input,
    inputContainerStyle: globalStyles.inputContainer,
    placeholderTextColor: colors.white,
    errorStyle: globalStyles.inputError
  },
  Icon: {
    color: colors.white,
    type: 'font-awesome'
  }
}

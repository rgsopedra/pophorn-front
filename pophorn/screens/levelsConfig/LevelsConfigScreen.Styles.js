import { StyleSheet } from 'react-native'
import colors from '../../constants/Colors'

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    opacity: 1,
    elevation: 4,
  },
  softButton: {
    backgroundColor: colors.darkPink
  },
  mediumButton: {
    backgroundColor: colors.mediumPink
  },
  hotButton: {
    backgroundColor: colors.lightPink
  },
  unselectedButton: {
    opacity: 0.3,
    backgroundColor: colors.darkPurple
  },
  buttonContainer: {
    marginBottom: 10,
  },
  levelTitleIcon:{
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: colors.white,
    marginLeft: 6,
  },
})

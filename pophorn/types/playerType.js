import PropTypes from 'prop-types'
import { genderType } from './genderType'

export const playerType = PropTypes.shape({
  nickname: PropTypes.string,
  gender: PropTypes.oneOf(Object.keys(genderType))
})

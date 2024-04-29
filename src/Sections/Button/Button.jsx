/* eslint-disable react/prop-types */
import s from './Button.module.css'

function Button({ children, focus = false, fullWidth = false, type }) {
  return (
    <button
      type={type}
      className={`${fullWidth && s.fullWidth} ${s.button}`}
      autoFocus={focus}
    >
      {children}
    </button>
  )
}

export default Button

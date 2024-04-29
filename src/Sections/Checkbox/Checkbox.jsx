/* eslint-disable react/prop-types */
import { useState } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'

import s from './Checkbox.module.css'
const Checkbox = ({ isChecked, onClick, disabled = false }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <div
      className={`${disabled && s.disabled} ${isChecked && s.checked} ${
        hovering && s.hovering
      } ${s.checkbox}`}
      onClick={() => !disabled && !!onClick && onClick()}
      onMouseEnter={() => !disabled && setHovering(true)}
      onMouseLeave={() => !disabled && setHovering(false)}
    >
      {isChecked ? (
        <IoCheckmarkOutline color='#fff' size='19px' />
      ) : hovering ? (
        <IoCheckmarkOutline size='19px' color='#878787' />
      ) : null}
    </div>
  )
}

export default Checkbox

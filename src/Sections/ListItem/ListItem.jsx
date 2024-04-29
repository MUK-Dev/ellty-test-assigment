/* eslint-disable react/prop-types */
import Checkbox from '../Checkbox/Checkbox'
import s from './ListItem.module.css'

const ListItem = ({ text, isChecked, onClick, disabled = false }) => {
  return (
    <div
      className={`${disabled && s.disabled} ${s.listItem}`}
      onClick={() => !disabled && onClick()}
    >
      {text}
      <Checkbox isChecked={isChecked} disabled={disabled} />
    </div>
  )
}

export default ListItem

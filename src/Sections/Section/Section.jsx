/* eslint-disable react/prop-types */
import s from './Section.module.css'

const Section = ({ title, children, fitContent = false }) => {
  return (
    <div className={`${fitContent && s.fitContent} ${s.section}`}>
      {title}
      <div className={s.container}>{children}</div>
    </div>
  )
}

export default Section

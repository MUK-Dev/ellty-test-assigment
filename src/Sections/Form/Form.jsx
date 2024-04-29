import { useState } from 'react'
import ListItem from '../ListItem/ListItem'
import s from './Form.module.css'
import Button from '../Button/Button'

const data = [
  {
    id: 1,
    text: 'Page 1',
    isChecked: false,
  },
  {
    id: 2,
    text: 'Page 2',
    isChecked: false,
  },
  {
    id: 3,
    text: 'Page 3',
    isChecked: false,
  },
  {
    id: 4,
    text: 'Page 4',
    isChecked: false,
  },
]

const Form = () => {
  const [list, setList] = useState(data)
  const [allChecked, setAllChecked] = useState(false)

  const handleClick = (index) => {
    if (allChecked) {
      setAllChecked(false)
    }
    const newList = [...list]
    newList[index].isChecked = !newList[index].isChecked
    setList(newList)
  }

  const handleSelectAll = () => {
    setAllChecked((prev) => !prev)

    setList((prev) => {
      const newList = [...prev]
      if (allChecked) {
        newList.forEach((item) => {
          item.isChecked = false
        })
      } else {
        newList.forEach((item) => {
          item.isChecked = true
        })
      }
      return newList
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(list))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <ListItem
        text='All Items'
        isChecked={allChecked}
        onClick={handleSelectAll}
      />
      <hr />
      {list.map((listItem, index) => (
        <ListItem
          key={listItem.id}
          {...listItem}
          onClick={() => handleClick(index)}
        />
      ))}
      <hr />
      <Button type='submit' fullWidth>
        Done
      </Button>
    </form>
  )
}

export default Form

import { useState } from 'react'
import './App.css'
import Button from './Sections/Button/Button'
import Checkbox from './Sections/Checkbox/Checkbox'
import Section from './Sections/Section/Section'
import ListItem from './Sections/ListItem/ListItem'
import Form from './Sections/Form/Form'

function App() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <Section title='Button'>
        <Button focus>Done</Button>
        <Button>Done</Button>
        <Button>Done</Button>
      </Section>
      <Section title='Checkbox' fitContent>
        <Checkbox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <Checkbox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          disabled
        />
      </Section>
      <Section title='Home'>
        <ListItem
          text='All pages'
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <ListItem
          text='All pages'
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          disabled
        />
      </Section>

      <div
        style={{
          backgroundColor: 'white',
          maxWidth: '50vw',
          height: '65vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form />
      </div>
    </>
  )
}

export default App

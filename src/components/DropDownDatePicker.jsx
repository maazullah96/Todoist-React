import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CustomToggle from './CustomToggle'

const DropDownDatePicker = ({ selectedDate, handleDateSelect }) => {
  // const [date, setDate] = useState('')
  const [buttonVariant, setButtonVariant] = useState('outline-danger')
  console.log(handleDateSelect)
  console.log(selectedDate)
  const handleDateOptionChange = (option) => {
    switch (option) {
      case 'today':
        handleDateSelect(new Date().toISOString().split('T')[0])
        setButtonVariant('outline-danger')
        break
      // case 'yesterday':
      //   const yesterday = new Date()
      //   yesterday.setDate(yesterday.getDate() - 1)
      //   handleDateSelect(yesterday.toISOString().split('T')[0])
      //   setButtonVariant('outline-warning')
      //   break
      case 'weekend':
        const today = new Date()
        const dayOfWeek = today.getDay()
        if (dayOfWeek === 0) {
          today.setDate(today.getDate() - 1)
        } else if (dayOfWeek === 6) {
          today.setDate(today.getDate() - 2)
        } else {
          today.setDate(today.getDate() + (6 - dayOfWeek))
        }
        handleDateSelect(today.toISOString().split('T')[0])
        setButtonVariant('outline-info')
        break
      default:
        break
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {selectedDate ? selectedDate : 'Due Date'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleDateOptionChange('today')}>
          Today
        </Dropdown.Item>
        {/* <Dropdown.Item onClick={() => handleDateOptionChange('yesterday')}>
          Yesterday
        </Dropdown.Item> */}
        <Dropdown.Item onClick={() => handleDateOptionChange('weekend')}>
          Weekend
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Group controlId='dob'>
            <Form.Control
              size='sm'
              value={selectedDate}
              type='date'
              //   name='dob'
              onChange={(event) => {
                console.log(event.target.value)
                handleDateSelect(event.target.value)
              }}
              onClick={(e) => e.stopPropagation()}
              // variant="outline-success"
            />
          </Form.Group>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownDatePicker

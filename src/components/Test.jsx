import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    variant='outline-secondary'
  >
    {children}
  </Button>
))

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('')

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className='list-unstyled'>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    )
  }
)

const Test = () => {
  const [date, setDate] = useState('')
  const [buttonVariant, setButtonVariant] = useState('outline-danger')

  const handleDateOptionChange = (option) => {
    switch (option) {
      case 'today':
        setDate(new Date().toISOString().split('T')[0])
        setButtonVariant('outline-danger')
        break
      case 'yesterday':
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        setDate(yesterday.toISOString().split('T')[0])
        setButtonVariant('outline-warning')
        break
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
        setDate(today.toISOString().split('T')[0])
        setButtonVariant('outline-info')
        break
      default:
        break
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {date ? date : 'Due Date'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleDateOptionChange('today')}>
          Today
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleDateOptionChange('yesterday')}>
          Yesterday
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleDateOptionChange('weekend')}>
          Weekend
        </Dropdown.Item>
        <Dropdown.Item eventKey='1'>
          <Form.Group controlId='dob'>
            <Form.Control
              size='sm'
              value={date}
              type='date'
              //   name='dob'
              onChange={(event) => {
                console.log(event.target.value)
                setDate(event.target.value)
              }}
              // variant="outline-success"
            />
          </Form.Group>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Test

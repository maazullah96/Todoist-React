import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Test from './Test'

const AddTodo = ({ show, handleClose }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])

  const handleDateOptionChange = (option) => {
    // Define a function to set the date based on the selected option
    switch (option) {
      case 'today':
        setDate(new Date().toISOString().split('T')[0])
        break
      case 'yesterday':
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        setDate(yesterday.toISOString().split('T')[0])
        break
      case 'weekend':
        const today = new Date()
        const dayOfWeek = today.getDay()
        if (dayOfWeek === 0) {
          // If today is Sunday, select Saturday
          today.setDate(today.getDate() - 1)
        } else if (dayOfWeek === 6) {
          // If today is Saturday, select Friday
          today.setDate(today.getDate() - 2)
        } else {
          // Select the upcoming Saturday
          today.setDate(today.getDate() + (6 - dayOfWeek))
        }
        setDate(today.toISOString().split('T')[0])
        break
      default:
        // Handle other options if needed
        break
    }
  }
  useEffect(() => {
    console.log(date)
  }, [date])
  return (
    <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Task Name</Form.Label>
            <Form.Control type='text' placeholder='Task name' autoFocus />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' placeholder='Description' rows={3} />
          </Form.Group>

          <Row>
            <Col>
              <Test />
            </Col>
            <Col>
            
              {/* <Dropdown variant='outline-dark' className='d-inline mx-2'>
                <Dropdown.Toggle id='dropdown-autoclose-true'>
                  Select Date Option
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => handleDateOptionChange('today')}
                  >
                    Today
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleDateOptionChange('yesterday')}
                  >
                    Yesterday
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleDateOptionChange('weekend')}
                  >
                    Weekend
                  </Dropdown.Item>
                  {/* Add more options if needed */}
                </Dropdown.Menu>
              </Dropdown> */}
            </Col>
          </Row>
        </Form>

        {/* 

        <Form.Group controlId='dob'>
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            onChange={(event) => {
              setDate(event.target.value)
            }}
            value={date}
            type='date'
            name='dob'
            variant='outline-success'
            placeholder='Date of Birth'
          />
        </Form.Group>

        <Dropdown variant='outline-dark' className='d-inline mx-2'>
          <Dropdown.Toggle id='dropdown-autoclose-true'>
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* <Button variant='outline-dark' size='sm'>
          Primary
        </Button>{' '} */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default AddTodo

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useTodos } from '../context/todosContext'
import Labels from './Labels'
import DropDownDatePicker from './DropDownDatePicker'
import Priorities from './Priority'
import Projects from './Projects'
import { useTodosDispatch } from '../context/todosContext'
const AddTodo = ({ show, handleClose }) => {
  const { projects } = useTodos()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedLabel, setSelectedLabel] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('')
  const [selectedProject, setSelectedProject] = useState(projects[0]?.id)
  const [task, setTask] = useState({
    taskname: '',
    description: ''
  })
  const todosDispatch = useTodosDispatch()

  const handleDateSelect = (date) => {
    setSelectedDate(date)
  }
  const handleLabelSelect = (label) => {
    setSelectedLabel(label)
  }
  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority)
  }

  const handleProjectSelect = (priority) => {
    setSelectedProject(priority)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }))
  }

  const saveHandler = () => {
    console.log(
      `task ==> ${task} ,selectedDate ==>${selectedDate} and selectedLabel ${selectedLabel}
      selectedPriority ===>${selectedPriority}
      `
    )

    const newTask = { ...task, selectedDate, selectedPriority, selectedLabel }
    todosDispatch({ type: 'ADD_TODO', payload: newTask })

    console.log('save')
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              placeholder='Task name'
              autoFocus
              type='text'
              name='taskname'
              value={task.taskname}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={task.description}
              onChange={handleInputChange}
              as='textarea'
              placeholder='Description'
              rows={3}
            />
          </Form.Group>
          <Row>
            <Col>
              <DropDownDatePicker
                selectedDate={selectedDate}
                handleDateSelect={handleDateSelect}
              />
            </Col>

            <Col>
              <div>
                <Labels
                  selectedLabelId={selectedLabel}
                  onSelectedLabel={handleLabelSelect}
                />
                {/* <p>Selected Label: {selectedLabel}</p> */}
              </div>
            </Col>

            <Col>
              <Priorities
                selectedPriorityId={selectedPriority}
                onSelectedPriority={handlePrioritySelect}
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className='justify-content-between'>
        <Col md={8}>
          <Projects
            selectedProjectId={selectedProject}
            onSelectedProject={handleProjectSelect}
          />
        </Col>
        <Col>
          <Button variant='danger' onClick={saveHandler}>
            Add
          </Button>
        </Col>
        <Col>
          <Button variant='dark' onClick={handleClose}>
            Close
          </Button>
        </Col>
      </Modal.Footer>
      {/* <Modal.Footer
        style={{
          display: 'flex'
        }}
      >
        {/* <div
          style={{
            // display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Projects
            selectedProject={selectedProject}
            onSelectedProject={handleProjectSelect}
          />
        </div> */}
      {/* <div
          style={{
            // display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
         <Button variant='danger' onClick={saveHandler}>
          Add
        </Button>

        <Button variant='dark' onClick={handleClose}>
          Close
        </Button>
        {/* </div> */}
      {/* </Modal.Footer> */}
    </Modal>
  )
}
export default AddTodo

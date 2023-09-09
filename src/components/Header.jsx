import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import AddTodo from './AddTodo'
import useToggle from '../hooks/useToggle'
import SideBar from './SideBar'
function Header() {
  //   const [show, setShow] = useState(false)

  const { show: showAddModal, toggle: toggleAddModal } = useToggle({
    defaultValue: false
  })
  const { show: showSideBar, toggle: toggleSideBar } = useToggle({
    defaultValue: false
  })

  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container fluid>
          {/* <FontAwesomeIcon icon='coffee' /> */}
          {/* <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='#action1' onClick={toggleSideBar}>
                <FontAwesomeIcon icon={faBars} />
              </Nav.Link>
              <Nav.Link href='#action1'>
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>

              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
              <Nav.Link href='#action2'>Link</Nav.Link>
              <NavDropdown title='Link' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#' disabled>
                Link
              </Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              <Nav.Link onClick={toggleAddModal}>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size='xl'
                  style={{ color: '#ff0000' }}
                />
              </Nav.Link>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showSideBar && (
        <SideBar show={showSideBar} handleClose={toggleSideBar} />
      )}

      {showAddModal && (
        <AddTodo show={showAddModal} handleClose={toggleAddModal} />
      )}
      {/* <AddTodo /> */}
    </>
  )
}

export default Header

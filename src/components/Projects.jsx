import { Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import { useTodos } from '../context/todosContext'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { fab as brandicons } from '@fortawesome/free-brands-svg-icons'

const Projects = ({ selectedProjectId, onSelectedProject }) => {
  const { projects } = useTodos()

  const handlePriorityClick = (label) => {
    onSelectedProject(label)
  }

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  )

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {selectedProject ? (
          <>
            <FontAwesomeIcon
              icon={selectedProject.icon}
              style={{ color: selectedProject.color }}
            />{' '}
            {selectedProject.title}
          </>
        ) : (
          'Priority'
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {projects.map((project) => (
          <Dropdown.Item
            key={project.id}
            href='#'
            onClick={() => handlePriorityClick(project.id)}
          >
            <FontAwesomeIcon
              icon={project.icon}
              style={{ color: project.color }}
            />{' '}
            {project.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

Projects.propTypes = {
  selectedProjectId: PropTypes.number,
  onSelectedProject: PropTypes.func.isRequired
}

export default Projects

import { Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import { useTodos } from '../context/todosContext'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Priorities = ({ selectedPriorityId, onSelectedPriority }) => {
  const { priorities } = useTodos()

  const selectedPriority = priorities.find(
    (priority) => priority.id === selectedPriorityId
  )

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {selectedPriority ? (
          <>
            <FontAwesomeIcon
              icon={faFlag}
              style={{ color: selectedPriority.color }}
            />{' '}
            {selectedPriority.title}
          </>
        ) : (
          'Priority'
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {priorities.map((priority) => (
          <Dropdown.Item
            key={priority.id}
            href='#'
            onClick={() => onSelectedPriority(priority.id)}
          >
            <FontAwesomeIcon icon={faFlag} style={{ color: priority.color }} />{' '}
            {priority.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Priorities

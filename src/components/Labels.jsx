import { Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import { useTodos } from '../context/todosContext'

const Labels = ({ selectedLabel, onSelectLabel }) => {
  const { labels } = useTodos()

  const handleLabelClick = (label) => {
    onSelectLabel(label)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {/* {date ? date : 'Due Date'} */}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {labels.map((label) => (
          <Dropdown.Item
            key={label.id}
            href='#'
            onClick={() => handleLabelClick(label.title)}
          >
            {label.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Labels

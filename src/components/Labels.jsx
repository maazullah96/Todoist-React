import { Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import { useTodos } from '../context/todosContext'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Labels = ({ selectedLabelId, onSelectedLabel }) => {
  const { labels } = useTodos()

  const selectedLabel = labels.find((label) => label.id === selectedLabelId)

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {selectedLabel ? (
          <>
            <FontAwesomeIcon
              icon={faTag}
              style={{ color: selectedLabel.color }}
            />{' '}
            {selectedLabel.title}
          </>
        ) : (
          'Label'
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {labels.map((label) => (
          <Dropdown.Item
            key={label.id}
            href='#'
            onClick={() => onSelectedLabel(label.id)}
          >
            <FontAwesomeIcon
              icon={faTag}
              rotation={90}
              style={{ color: label.color, paddingBottom: '5' }}
            />
            {'  '}
            {label.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Labels

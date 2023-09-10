import { Button } from 'react-bootstrap'
import { forwardRef } from 'react'
const CustomToggle = forwardRef(({ children, onClick }, ref) => (
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

export default CustomToggle

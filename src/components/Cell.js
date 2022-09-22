import React, {useState} from 'react'
import styled from 'styled-components';

const StyledCell = styled.div`
  background-color: ${props => props.color};
  border: 1px solid ${props => props.theme.canvas};
`

const Cell = ({ mouseDown, brushColor }) => {
  const [color, setColor] = useState('rgb(255, 255, 255)')

  const handleClick = () => setColor(brushColor);

  const handleHover = () => {
    if (mouseDown) setColor(brushColor);
  }

  return (
    <StyledCell color={color} onMouseOver={handleHover} onMouseDown={handleClick} />
  )
}

export default Cell
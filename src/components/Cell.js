import React from 'react'
import styled from 'styled-components';

const StyledCell = styled.div`
  background-color: ${props => props.color};
  border: 1px solid ${props => props.theme.colors.canvas};
`

const Cell = ({ mouseDown, color, gridPos, currentAction }) => {

  const handleClick = () => {
    currentAction(gridPos);
  }

  const handleHover = () => {
    if (mouseDown) {
      currentAction(gridPos);
    }
  }

  return (
    <StyledCell color={color} onMouseOver={handleHover} onMouseDown={handleClick} />
  )
}

export default Cell
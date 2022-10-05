import React from 'react'
import styled from 'styled-components';

const StyledToggleButton = styled.button`
  ${({ active }) => active && `
    background: pink;
  `}
`

const ToggleButton = ({ text, active, actionIndex, handleActionChange }) => {

  const handleClick = () => {
    handleActionChange(actionIndex);
  }

  return (
    <StyledToggleButton onClick={handleClick} active={active}>
      {text}
    </StyledToggleButton>
  )
}

export default ToggleButton
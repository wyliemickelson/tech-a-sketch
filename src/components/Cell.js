import React from 'react'
import styled from 'styled-components';

const StyledCell = styled.div`
  background-color: ${props => props.color};
`

const Cell = ({ color }) => {
  return (
    <StyledCell color={color}>

    </StyledCell>
  )
}

export default Cell
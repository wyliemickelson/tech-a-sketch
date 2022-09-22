import React from 'react'
import styled from 'styled-components';
import Cell from './Cell';

const StyledCanvas = styled.section`
  width: ${props => props.SIZEPX};
  height: ${props => props.SIZEPX};
  gap: 1px;
  background-color: ${props => props.theme.colors.canvas};
  border: 1px solid ${props => props.theme.colors.canvas};

  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr) ;
`

const Canvas = ({ length }) => {

  const SIZEPX = '600px';
  const numCells = length * length;

  return (
    <StyledCanvas length={length} SIZEPX={SIZEPX}>
      {[...Array(numCells)].map(cell => <Cell color='white'/>)}
    </StyledCanvas>
  )
}

export default Canvas
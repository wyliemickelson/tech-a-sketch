import React, {useState} from 'react'
import styled from 'styled-components';
import Cell from './Cell';

const StyledCanvas = styled.section`
  width: ${props => props.SIZEPX};
  height: ${props => props.SIZEPX};
  background-color: ${props => props.theme.colors.canvas};
  border: 1px solid ${props => props.theme.colors.canvas};

  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  
`

const Canvas = ({ length, mouseDown }) => {

  const SIZEPX = '600px';
  const numCells = length * length;

  return (
    <StyledCanvas length={length} SIZEPX={SIZEPX}>
      {[...Array(numCells)].map(cell => <Cell mouseDown={mouseDown} />)}
    </StyledCanvas>
  )
}

export default Canvas
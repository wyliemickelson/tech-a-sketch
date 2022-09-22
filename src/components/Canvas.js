import React, {useState} from 'react'
import styled from 'styled-components';
import Cell from './Cell';
const tinycolor = require('tinycolor2');

const StyledCanvas = styled.section`
  width: ${props => props.SIZEPX};
  height: ${props => props.SIZEPX};
  background-color: ${props => props.theme.colors.canvas};
  border: 1px solid ${props => props.theme.colors.canvas};

  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);

`

const Canvas = ({ length, brushColor, mouseDown, currentAction }) => {
  const numCells = length * length;
  const [grid, setGrid] = useState(Array(numCells).fill('white'));

  const SIZEPX = '600px';

  const paintCell = (index) => {
    const newGrid = [...grid];
    newGrid[index] = brushColor;
    setGrid(newGrid);
  }

  const shadeCell = (index) => {
    const currColor = grid[index];
    const shadedColor = tinycolor(currColor).darken(2.5).toString();
    const newGrid = [...grid];
    newGrid[index] = shadedColor;
    setGrid(newGrid);
  }

  const lightenCell = (index) => {
    const currColor = grid[index];
    const shadedColor = tinycolor(currColor).lighten(2.5).toString();
    const newGrid = [...grid];
    newGrid[index] = shadedColor;
    setGrid(newGrid);
  }

  const actions = [paintCell, shadeCell, lightenCell];
  const action = actions[currentAction];

  return (
    <StyledCanvas length={length} SIZEPX={SIZEPX}>
      {grid.map((cellColor, index) => {
        const gridPosCol = index % length;
        const gridPosRow = Math.floor(index / length);
        return <Cell mouseDown={mouseDown} color={cellColor} brushColor={brushColor} gridPos={index} currentAction={action} />
      })}
    </StyledCanvas>
  )
}

export default Canvas
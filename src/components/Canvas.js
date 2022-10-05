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

  const paintBucket = (fillArea) => {
    const newGrid = [...grid];
    Object.keys(fillArea).forEach(index => newGrid[index] = brushColor);
    setGrid(newGrid);
  }

  const eraseCell = (index) => {
    const newGrid = [...grid];
    newGrid[index] = 'white';
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

  const fillWithBucket = (startIndex) => {
    const startColor = grid[startIndex];
    const checked = {};
    const fillArea = {};
    checkCells(startIndex, startColor, fillArea, checked);

    paintBucket(fillArea);
  }

  const checkCells = (currentIndex, startColor, fillArea, checked) => {
    if (checked[currentIndex] === true || grid[currentIndex] !== startColor) {
      return;
    }

    checked[currentIndex] = true;
    fillArea[currentIndex] = true;

    let leftIndex = currentIndex - 1;
    let aboveIndex = currentIndex - length;
    let rightIndex = currentIndex + 1;
    let belowIndex = currentIndex + length;

    const invalidLeft = leftIndex % length === length - 1;
    const invalidRight = rightIndex % length === 0;

    if (!invalidLeft) checkCells(leftIndex, startColor, fillArea, checked);
    checkCells(aboveIndex, startColor, fillArea, checked);
    if (!invalidRight) checkCells(rightIndex, startColor, fillArea, checked);
    checkCells(belowIndex, startColor, fillArea, checked);
  }

  const actions = [paintCell, eraseCell, shadeCell, lightenCell, fillWithBucket];
  const action = actions[currentAction];

  return (
    <StyledCanvas length={length} SIZEPX={SIZEPX}>
      {grid.map((cellColor, index) => {
        return <Cell mouseDown={mouseDown} color={cellColor} brushColor={brushColor} gridPos={index} currentAction={action} />
      })}
    </StyledCanvas>
  )
}

export default Canvas
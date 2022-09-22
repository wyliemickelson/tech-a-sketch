import React, {useState} from 'react'
import Menu from './Menu'
import Canvas from './Canvas'
import styled from 'styled-components';

const StyledPage = styled.div`

`

const Page = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [brushColor, setBrushColor] = useState('rbg(0, 0, 0)');

  const handleMouseDown = () => setMouseDown(true);
  const handleMouseUp = () => setMouseDown(false);

  // Prevent bug from occuring on paint drag
  const handleDrag = (e) => e.preventDefault();

  return (
    <StyledPage onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onDragStart={handleDrag}>
      <Menu brushColor={brushColor} setBrushColor={setBrushColor} />
      <Canvas length={25} mouseDown={mouseDown} />
    </StyledPage>
  )
}

export default Page
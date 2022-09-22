import React, {useState} from 'react'
import Menu from './Menu'
import Canvas from './Canvas'
import styled from 'styled-components';
import { defaultSettings } from './defaultSettings';

const StyledPage = styled.div`

`

const Page = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  const handleMouseDown = () => setMouseDown(true);
  const handleMouseUp = () => setMouseDown(false);

  // Prevent bug from occuring on paint drag
  const handleDrag = (e) => e.preventDefault();

  return (
    <StyledPage onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onDragStart={handleDrag}>
      <Menu settings={settings} setSettings={setSettings} />
      <Canvas length={settings.length} brushColor={settings.brushColor} mouseDown={mouseDown} currentAction={settings.currentAction} />
    </StyledPage>
  )
}

export default Page
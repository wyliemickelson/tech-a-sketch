import React from 'react'
import ToggleButton from './ToggleButton';

const Menu = ({ brushColor, settings, setSettings }) => {

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSettings({...settings, brushColor: newColor});
  }

  const handleActionChange = (actionIndex) => {
    setSettings({...settings, currentAction: actionIndex});
  }

  return (
    <>
      <div>
        <input type='color' value={brushColor} onChange={handleColorChange} />
        <p>Brush Color </p>
      </div>
      {settings.actions.map((action, index) => {
        const isCurrentAction = index === settings.currentAction;
        return <ToggleButton text={action} active={isCurrentAction} actionIndex={index} handleActionChange={handleActionChange} key={action} />
      })}
    </>
  )
}

export default Menu
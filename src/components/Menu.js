import React from 'react'

const Menu = ({ brushColor, settings, setSettings }) => {

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSettings({...settings, brushColor: newColor});
  }

  const handleActionChange = (actionIndex) => {
    const newAction = settings.currentAction === 2 ? 0 : settings.currentAction + 1;
    setSettings({...settings, currentAction: newAction});
  }

  return (
    <>
      <input type='color' value={brushColor} onChange={handleColorChange} />
      <button onClick={handleActionChange}>Change</button>
    </>
  )
}

export default Menu
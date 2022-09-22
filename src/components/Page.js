import React from 'react'
import Menu from './Menu'
import Canvas from './Canvas'

const Page = () => {
  return (
    <>
      <Menu />
      <Canvas length={25}/>
    </>
  )
}

export default Page
import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MachContainer from './MachCOntainer'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  const ismobile = useMediaQuery({ maxWidth: 767 })
const links = ismobile? ["iphone", "iPad", 'services', 'ios', 'mac', 'products']:["iphone", "iPad", 'services', 'ios', 'mac', 'products',"iphone", "iPad", 'services', 'ios', 'mac', 'products']
  return (
    <div className='w-full h-screen poppins-regular'>
      <div className='absolute flex gap-4 md:gap-5 top-14 left-1/2 -translate-x-1/2 '>
        {links.map(e => <a href='' className='text-white font-[500] text-sm capitalize ' >{e}

        </a>)}
      </div>
      <div className='absolute top-48 md:top-40 left-1/2 -translate-x-1/2  text-white  text-center flex flex-col justify-center items-center w-[100%]'>
        <h1 className='text-5xl md:text-7xl font-semibold masked tracking-tighter'>macbook pro.</h1>
        <h3>Oh so pro</h3>
        <p className='w-3/4 md:w-1/4 text-[12px]'>This was my 2nd website of Three.js, how was it could you please tell.</p>
      </div>
      <Canvas camera={{ fov: ismobile ? 19 : 18, position: [0, -10, 220] }}>
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <ScrollControls pages={3}>
          <MachContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App

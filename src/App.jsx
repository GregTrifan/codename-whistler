import React from 'react'
import 'twin.macro'
import Navbar from './components/Navbar'
import Pad from './components/Pad'


const App = () => {
  const [zoom, setZoom] = React.useState(1);
  const [border, setBorder] = React.useState(1);
  return (
    <div tw="bg-black">
      <Navbar zoom={zoom} setZoom={setZoom} border={border} setBorder={setBorder} />
      <Pad zoom={zoom} border={border} />

    </div>

  )
}
export default App;

import React from 'react'
import tw from 'twin.macro'
import Navbar from './components/Navbar'

const Title = tw.h1`
  font-extrabold text-8xl
`
const Subtitle = tw.h2`
  font-bold text-3xl text-center text-gray-300
`
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-green-500 to-blue-600 animate-gradient-y`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Navbar />
  </div>
)

export default App;

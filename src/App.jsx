import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './components'

const Title = tw.h1`
  font-extrabold text-8xl
`
const Subtitle = tw.h2`
  font-bold text-3xl text-center text-gray-300
`
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Title>Lorem Ipsum</Title>
      <Subtitle>Under Work out there!</Subtitle>
    </div>
  </div>
)

export default App

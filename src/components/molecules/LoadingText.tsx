import { FC } from 'react'

import { TypeAnimation } from 'react-type-animation'

const LoadingText: FC = () => {
  return (
    <TypeAnimation
      sequence={[
        'Loading My Portfolio...',
        () => {
          //return fetch("https://test.com"), will be awaited
          return new Promise((resolve) => setTimeout(resolve, 2000))
        },
        'successfully!',
      ]}
      speed={40}
      wrapper="div"
      repeat={Infinity}
      className=""
    />
  )
}

export default LoadingText

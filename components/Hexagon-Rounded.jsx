import { Center } from '@chakra-ui/react'

const HexagonRounded = ({ children, size = 70, ...rest }) => {
  const width = size
  const height = width / 0.866025403784439
  return (
    <Center
      w={`${width}px`}
      h={`${height}px`}
      // fill="none"
      // stroke="red"
      // background="black"
      // stroke-width="2"
      clipPath="polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
      {...rest}
    >
      {children}
    </Center>
  )
}

export default HexagonRounded

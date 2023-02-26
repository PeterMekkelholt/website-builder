import { Center } from '@chakra-ui/react'

const Hexagon = ({ children, size = 120, ...rest }) => {
  const width = size
  const height = size * 0.866025403784439
  return (
    <Center
      w={width}
      h={height}
      clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      {...rest}
    >
      {children}
    </Center>
  )
}

export default Hexagon

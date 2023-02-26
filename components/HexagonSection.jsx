import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import hex from '../public/hex_bg.png'

const HexagonSection = ({ children, ...rest }) => {
  return (
    <Flex
      py={20}
      px={10}
      as="section"
      background="brand.gradient2"
      minH="200"
      {...rest}
    >
      <Box position="fixed" top={0} right={0}>
        <Image src={hex} alt="Background hexagons" />
      </Box>
      Hello
      {children}
    </Flex>
  )
}

export default HexagonSection

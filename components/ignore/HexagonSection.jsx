import { Box, Flex, useTheme } from '@chakra-ui/react'
import Image from 'next/image'
import hex from '../public/hex_bg.png'
import city from '../public/city_bg.png'

const HexagonSection = ({ variant = 'section', children, ...rest }) => {
  const theme = useTheme()
  return (
    <Flex
      py={20}
      px={10}
      as="section"
      background={variant === 'hero' ? 'brand.gradient3' : 'brand.gradient2'}
      minH="200"
      position="relative"
      {...rest}
    >
      <Box position="absolute" top={0} right={0}>
        <Image src={hex} alt="Background hexagons" />
      </Box>
      {variant === 'hero' && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          h="100%"
          w="100%"
          background={`url(${city.src}) repeat-x bottom left`}
        />
      )}
      {children}
    </Flex>
  )
}

export default HexagonSection

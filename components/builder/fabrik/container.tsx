import { Box } from '@chakra-ui/react'

export const Fabrik_Container = (props) => {
  return (
    <Box as="section" minH="400px">
      {props.children}
    </Box>
  )
}

export default Fabrik_Container
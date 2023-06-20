import { Box } from '@chakra-ui/react'

export const Evolvr_Container = (props) => {
  return (
    <Box as="section" minH="400px">
      {props.children}
    </Box>
  )
}

export default Evolvr_Container
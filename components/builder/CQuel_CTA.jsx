import {
  Box,
  Button,
  Heading,
  Container,
  Stack,
  Text,
  FormControl,
  Input,
  Flex,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react'

export const CQuel_cta = (props) => {
  return (
    <Box
      bgColor="brand.darkBlue"
      as="section"
      padding="2em 0"
      // minH="200px"
    >
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }}>
        <Heading
          as="h2"
          fontFamily="Poppins"
          size="2xl"
          color="brand.lightBlue"
          fontWeight="extrabold"
          letterSpacing="tight"
          fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
        >
          {props.CTA_title}
        </Heading>
      </Stack>
    </Box>
  )
}

export default CQuel_cta

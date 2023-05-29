import Link from 'next/link'
import { Logo } from '../Logo'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export const M49_footer = (props) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              &copy; {new Date().getFullYear()} {props.brand_name}. All rights
              reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            {props?.product?.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {props?.company?.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {props?.support?.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            {props?.social?.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default M49_footer

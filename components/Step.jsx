import { Text, Center, Image, Stack } from '@chakra-ui/react'
import { Quicksand } from 'next/font/google'
// import Hexagon-Rounde
import HexagonRounded from '../components/Hexagon-Rounded'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['700'],
})

export const Step = (props) => {
  const { name, icon } = props

  return (
    <Stack
      px="30px"
      py="10px"
      direction="row"
      spacing={{
        base: '4',
        md: '5',
      }}
      height="85px"
      w="220px"
      borderRight={{
        md: '1px solid #e9e9e9',
        sm: 'none',
      }}
      _last={{ border: 'none' }}
    >
      <Center>
        <HexagonRounded mr={4} background="brand.gradient1">
          <Image width="70%" src={icon} alt="Alt" />
        </HexagonRounded>
        <Stack
          spacing={{
            base: '1',
            md: '2',
          }}
          flex="1"
        >
          <Text
            className={quicksand.className}
            fontFamily="Poppins"
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="brand.darkBlue"
          >
            {name}
          </Text>
        </Stack>
      </Center>
    </Stack>
  )
}

import { Text, Center, Image, Stack, Circle } from '@chakra-ui/react'
import { Quicksand } from 'next/font/google'
import Hexagon from '../components/Hexagon'

const quicksand = Quicksand({ subsets: ['latin'] })

export const Step = (props) => {
  const { name, icon } = props

  return (
    <Stack
      padding="40px"
      direction="row"
      spacing={{
        base: '4',
        md: '5',
      }}
      height="150px"
      width="340px"
    >
      <Center>
        <Hexagon mr={4} size={100} background="brand.gradient1">
          <Image width="70%" src={icon} alt="Alt" />
        </Hexagon>
        <Stack
          spacing={{
            base: '1',
            md: '2',
          }}
          flex="1"
        >
          <Text
            className={quicksand.className}
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            fontWeight={400}
            color="#1F507A"
          >
            {name}
          </Text>
        </Stack>
      </Center>
    </Stack>
  )
}

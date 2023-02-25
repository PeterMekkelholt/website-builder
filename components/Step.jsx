import { Text, Center, Image, Stack, Circle, Box } from '@chakra-ui/react'
import { Quicksand } from 'next/font/google'

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
        <Circle size="28" bg="#74D199" mr="2em">
          <Image width="50%" src={icon} alt="Alt" />
        </Circle>
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

import { Text, Center, Image, Stack, Circle, Box } from '@chakra-ui/react'

export const Step = (props) => {
  const { name, icon } = props

  return (
    <Stack
      // bgColor="blue"
      padding="40px"
      direction="row"
      spacing={{
        base: '4',
        md: '5',
      }}
      height="150px"
      width="100%"
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
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            fontWeight="medium"
            fontFamily="Quicksand"
            color="#1F507A"
          >
            {name}
          </Text>
        </Stack>
      </Center>
    </Stack>
  )
}

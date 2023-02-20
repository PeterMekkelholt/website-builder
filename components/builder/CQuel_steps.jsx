import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Circle,
} from '@chakra-ui/react'
import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

const features = [
  {
    name: '210+ Components',
    description:
      'Chakra UI Pro has 210+ componentsto help you develop your project faster.',
    icon: BsStars,
  },
  {
    name: 'Production Ready',
    description:
      'Effortlessly create your next production-ready experience with Chakra UI Pro components.',
    icon: IoRocketSharp,
  },
  {
    name: 'Light & Dark',
    description:
      'All components support a light and a dark color mode out of the box.',
    icon: BsFillMoonFill,
  },
  {
    name: 'Themeable',
    description:
      "Your style. Your blue. Customize the components as you need them. It's that simple.",
    icon: FaPaintBrush,
  },
  {
    name: 'Fully Responsive',
    description:
      'Responsive components that look great on mobile, tablet and desktop.',
    icon: FaExpandAlt,
  },
  {
    name: 'Accessible',
    description:
      "Accessibility first. That's why we pay attention to accessibility right from the start.",
    icon: FaAccessibleIcon,
  },
]

export const CQuel_Steps = (props) => {
  return (
    <Center
      as="section"
      height="100%"
      pos="relative"
      zIndex="999"
      position="relative"
      top="-75px"
    >
      <Box
        bg="white"
        width="1000px"
        height="100%"
        boxShadow="lg"
        borderRadius="xl"
      >
        <SimpleGrid
          columns={{
            base: 2,
            lg2: 4,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          <Stack
            padding="40px"
            direction="row"
            spacing={{
              base: '4',
              md: '5',
            }}
            height="150px"
          >
            <Center>
              <Circle
                size={{
                  base: '22',
                  md: '28',
                }}
                bg="#74D199"
                mr="2em"
              >
                <Image width="50%" src={props.step_icon} alt="Alt" />
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
                  Plan
                </Text>
              </Stack>
            </Center>
          </Stack>

          {/* {features.map((feature) => (
            <Stack
              key={feature.name}
              spacing={{
                base: '4',
                md: '5',
              }}
            >
              <Square
                size={{
                  base: '10',
                  md: '12',
                }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon
                  as={feature.icon}
                  boxSize={{
                    base: '5',
                    md: '6',
                  }}
                />
              </Square>
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
                >
                  {feature.name}
                </Text>
                <Text color="muted">{feature.description}</Text>
              </Stack>
            </Stack>
          ))} */}
        </SimpleGrid>
      </Box>
    </Center>
  )
}

export default CQuel_Steps

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
import { Step } from '../Step'

export const CQuel_Steps = (props) => {
  return (
    <Center
      as="section"
      height="100%"
      pos="relative"
      zIndex="1"
      position="relative"
      top="-75px"
      // bgColor="rgb(185, 227, 239, .2)"
    >
      <Center
        bg="white"
        // width="1100px"
        width={{
          base: '100%',
          md: '80%',
          lg2: '1100px',
        }}
        height="100%"
        boxShadow="lg"
        borderRadius="xl"
      >
        <SimpleGrid
          columns={{
            // xs: 1,
            base: 1,
            md: 2,
            lg2: 4,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          <Step name={props.step_1} icon={props.step_icon_1}></Step>
          <Step name={props.step_2} icon={props.step_icon_2}></Step>
          <Step name={props.step_3} icon={props.step_icon_3}></Step>
          <Step name={props.step_4} icon={props.step_icon_4}></Step>
        </SimpleGrid>
      </Center>
    </Center>
  )
}

export default CQuel_Steps

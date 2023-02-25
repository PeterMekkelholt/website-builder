import { Flex, Center } from '@chakra-ui/react'
import { Step } from '../Step'
import React from 'react'

export const CQuel_Steps = (props) => {
  const { step_items: stepItems } = props
  return (
    <Center
      as="section"
      pos="relative"
      zIndex="1"
      position="relative"
      top="-75px"
    >
      <Flex
        wrap="wrap"
        bg="white"
        boxShadow="lg"
        borderRadius="xl"
        justifyContent="center"
        maxW={{
          sm: '100%',
          md: '90%',
        }}
      >
        {stepItems &&
          stepItems.map(({ image, text }, idx) => (
            <Step key={idx} name={text} icon={image}></Step>
          ))}
      </Flex>
    </Center>
  )
}

export default CQuel_Steps

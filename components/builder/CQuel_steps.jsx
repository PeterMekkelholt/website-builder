import { Box, Flex, Heading } from '@chakra-ui/react'
import { Step } from '../Step'
import Image from 'next/image'
import React from 'react'

export const CQuel_Steps = (props) => {
  const {
    step_items: stepItems,
    sub_heading: subHeading,
    logo,
    children,
  } = props
  return (
    <Box bgColor="brand.darkBlue" height="100%">
      <Flex
        as="section"
        direction="column"
        pos="relative"
        align="center"
        zIndex="1"
        top="-50px"
        color="brand.lightGreen"
      >
        <Flex
          wrap="wrap"
          bg="white"
          boxShadow="lg"
          borderRadius="2xl"
          justify="center"
          align="center"
          maxW={{
            base: '90%',
            md: '90%',
          }}
          padding="10px"
        >
          {stepItems &&
            stepItems.map(({ image, text }, idx) => (
              <Step key={idx} name={text} icon={image}></Step>
            ))}
        </Flex>
        <Flex
          mt={10}
          // fontSize="45px"
          fontWeight={600}
          align="center"
          direction="column"
        >
          <Heading
            as="h2"
            //fontFamily="Poppins"
            // size="2xl"
            color="brand.lightBlue"
            fontWeight="extrabold"
            letterSpacing="tight"
            fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}
            // size="2xl"
            my={8}
          >
            {subHeading}
          </Heading>
          {logo && (
            <Box mt={10}>
              <Image src={logo} height={200} width={200} />
            </Box>
          )}
        </Flex>
        {children}
      </Flex>
    </Box>
  )
}

export default CQuel_Steps

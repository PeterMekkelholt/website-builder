import {
    AspectRatio,
    Center,
    Flex,
    Heading,
    useTheme,
  } from '@chakra-ui/react'
  import Link from 'next/link'
  
  const Evolvr_Container_Item = (props) => {
    const {
      item_headline: headline,
      item_description: description,
      item_button: buttonText,
      item_button_url: buttonUrl = '#',
      image_left: left = true,
    } = props
    const {
      colors: {
        brand: { carbonLight },
      },
    } = useTheme()
  
    return (
      <Flex
        flex={1}
        justify="center"
        align="center"
        background={left ? `${carbonLight}  repeat ` : 'none'}
      >

        <Heading
        as="h2"
        fontFamily="Poppins"
        color="#284863"
        fontWeight="bold"
        letterSpacing="tight"
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        lineHeight={'110%'}
        >
        {headline}
        </Heading>


      </Flex>
    )
  }
  
  export default Evolvr_Container_Item
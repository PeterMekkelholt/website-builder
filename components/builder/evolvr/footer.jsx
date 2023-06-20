import Link from 'next/link'
//import { Logo } from '../../Logo'
//import { useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  Box,
  Container,
  Button,
  IconButton,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export const Evolvr_Footer = (props) => {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <div>
        {<div dangerouslySetInnerHTML={createMarkup(props.footer_copy)}></div>}
      </div>

      {props.footer_items?.map((footer_item, idx) => (
          <div key={idx}>
          <Link href={footer_item.url}>{footer_item.caption} </Link>
          </div>
        ))}          
    </Box>
  )
}

function createMarkup(content) {
  return {__html: content};
}


export default Evolvr_Footer

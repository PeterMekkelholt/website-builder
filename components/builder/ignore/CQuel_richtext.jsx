import { Box } from '@chakra-ui/react'

export const CQuel_richtext = (props) => {
  return (
    <Box as="section">
        <div minH="100px">
            {<div dangerouslySetInnerHTML={createMarkup(props.CQuel_richText)}></div>}
        </div>
    </Box>
  )
}

function createMarkup(content) {
    return {__html: content};
  }
export default CQuel_richtext
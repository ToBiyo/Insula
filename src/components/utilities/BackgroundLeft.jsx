import { Box } from '@chakra-ui/react'

export const BackgroundLeft = (props) => {

    const {color, zIndex, width, opacity} = props;

    

    

      const Background = {
        width: width ? width : "65vw",
        height: '100vh',
        bg: color,
        zIndex: zIndex,
        clipPath: 'polygon(0 0, 80% 0%, 100% 100%, 0% 100%)',
        position : 'relative',
        opacity : opacity ? opacity : 1,
        alignItems : 'center', 
        display : { base : 'none',sm : 'none', md : 'none', lg : 'flex', xl : 'flex', '2xl': 'flex'}
      }

  return (
    <Box sx={Background}>
        {props.children}
    </Box> 
  )
}

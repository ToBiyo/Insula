import { Box } from "@chakra-ui/react";

export const BackgroundRight = (props) => {
    const {color, width, opacity} = props;

      const Background = {
        width: width ? width : "65vw",
        height: '100vh',
        bg: color,
        clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
        opacity : opacity ? opacity : 1,
        display : { base : 'none',sm : 'none', md : 'none', lg : 'none', xl : 'flex', '2xl': 'flex'},
      }
  return (
    <Box sx={Background}>
        {props.children}
    </Box>
  )
}

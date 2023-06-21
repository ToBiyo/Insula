import { Button } from '@chakra-ui/react'

export const UtilityButton = (props) => {
    const {value, align} = props;

    const btn = {
    fontSize: {base : '0.8rem', sm : '0.9rem', md : '1rem', lg : '1.1rem', xl : '1.2rem'},
     w : {base : '90px',sm : '95px', md : '100px', lg : '110px', xl : '120px' },
     h : '50px', 
     borderRadius : '20px', 
     bg : 'orange.400',
     color : '#fff',
     alignSelf : align ? align : 'center',
     margin : '20px 20px 20px 0'
    }
   return (
 
     <Button sx={btn} variant=''>{value}</Button>
   )
}

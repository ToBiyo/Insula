//chakra
import { Flex, Heading } from "@chakra-ui/react"

export const FooterMobileBanner = () => {

    const MobileBanner = {
        display : {base : 'flex', xl : 'none'},
        bg : '#012d5e',
        margin : '0px 0 20px 0',
        alignItems : { base :'center' ,lg : 'center'},
        justifyContent : 'center',
        w : '100%',
        h : {base : '140px', sm : '180px', md : '200px'},
    }
    const ContactHeading = {
        color : '#fff',
        m : '30px 0 0 0',
        borderBottom : '2px solid',
        borderColor : 'orange.400'
    }

  return (
    <Flex sx={MobileBanner}>
        <Heading sx={ContactHeading}>Contatti</Heading>
    </Flex>
  )
}

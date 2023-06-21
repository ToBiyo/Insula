//chakra
import { 
Flex, 
Heading 
} from "@chakra-ui/react";

//style
import "./ContactForm.css";


export const ContactForm = () => {
    
    const formContainer = {
        width: '50%', 
        height : 'auto',
        flexDir : 'column',
        alignItems : 'center',
        justifyContent :'center'
    }
  return (
    <Flex sx={formContainer}>
      <Heading margin={'120px 0 20px 0'} fontSize={'3rem'} borderBottom={'3px solid orange'}>Contattaci</Heading>
      <form action="#" className="form">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="tel" name="" id="" placeholder="your phone number" />
        <input type="email" name="" id="" placeholder="esempio@gmail.com"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
        <input type="submit" value={"Submit"} id="submit_btn"/>
      </form>
    </Flex>
  );
};

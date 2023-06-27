//chakra
import { Flex, Heading, FormControl, Input, Textarea, Button } from "@chakra-ui/react";



export const ContactForm = () => {
  const formContainer = {
    width: { base: "90%", sm : '80%', md : '70%' },
    height: {base : 'auto', lg : 'auto'},
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const Form = {
    w : {base : '90%', md : '70%', xl : '50%'},
    
  }
  const FormHeading = {
    margin: "20px",
    fontSize: { base: "2.4rem" },
    borderBottom: "3px solid orange",
    display : {base : 'none', xl : 'block'}
    
  };

  const FormInput = {
    border : 'none',
    borderRadius : '0',
    borderBottom : '1px solid orange', 
    margin : 0,
    outline : 'none',
    ':focus' : {
      border : 'none',
      borderRadius : '0',
      borderBottom : '1px solid orange'
    },
    ':visited' : {
      border : 'none',
      borderRadius : '0',
      borderBottom : '1px solid orange'
    }
  };

  const MessageInput = {
     h : {base : '15vh'},
     border : 'none', 
     borderBottom : '1px solid',
     borderColor : 'orange.400',
     borderRadius : '0px'
  }
  const submitButton = {
    bg : 'orange.400',
    margin : '20px auto',
    display : 'block',
    alignSelf : 'center',
    justifySelf : 'center',
    color : '#fff',
    w : '80px',
    borderRadius  :'15px', 
    ':active' : {
      bg : 'orange.400'
    },
    ':focus' : {
      bg : 'orange.400'
    },
    ':hover' : {
      bg : 'orange.400'
    }

  }

  return (
    <Flex sx={formContainer}>
      <Heading sx={FormHeading}>Contattaci</Heading>
      <FormControl action="#" sx={Form}>
        <Input type="text" name="" id="" placeholder="Name" sx={FormInput} />
        <Input type="tel" name="" id="" placeholder="your phone number" sx={FormInput} />
        <Input type="email" name="" id="" placeholder="esempio@gmail.com" sx={FormInput}/>
        <Textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message..."
          sx={MessageInput}
          resize={'none'}
        ></Textarea>
        <Button sx={submitButton}>Invia</Button>
      </FormControl>
    </Flex>
  );
};

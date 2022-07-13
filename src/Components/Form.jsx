import React from 'react'
import { Button,Box,
     Heading, 
     Input,
      PinInputField,
      PinInput,
       Select, 
       Stack,
       Menu,
       MenuButton,
       MenuList,
       MenuItem
    } from '@chakra-ui/react'
    import { ChevronDownIcon } from "@chakra-ui/icons"

import { useState } from 'react'

const Form = () => {
    const[loading,setLoading]=useState(false)
    const [otp,setOtp]=useState("")
  return (
    <Box>
        <Heading>Form</Heading>
        <Stack direction="column" gap="0.5rem">
        <Box>
            <Input type="email" placeholder="Email"/>
        </Box>
        <Box>
            <Input type="password" placeholder="Password"/>

        </Box>
        <Box>
            <PinInput value={otp} onChange={(value)=>setOtp(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
              </PinInput>
        </Box>
        <Box>{otp}</Box>
        <Box>
            <Select placeholder='Slect option'>
                <option value="Option">Option 1</option>
                <option value="Option">Option 2</option>
                <option value="Option">Option 3</option>
               <option value="Option">Option 4</option>
            </Select>
        </Box>
        <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem >Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
         <Box>
        <Button onClick={()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
            },2000)

        }} isLoading={loading}
        >
            {" "}SIGN UP{" "}
            </Button>
        </Box>
        </Stack>
    </Box>
  )
}

export default Form
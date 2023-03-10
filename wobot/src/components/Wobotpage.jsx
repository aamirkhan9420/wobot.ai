import { Box, Button, Flex, Grid, GridItem, Image, Input, InputGroup, Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Wobotpage() {
    return (
        // -----------------Responsive-----------------//
        <Box padding={{base:2,md:5,lg:10}}>
            <Box border={"3px solid skyblue"} p={10}>
                <Box h="10%" w={{base:"25%",md:"20%",lg:"10%"}} >
                    <Image   src="data:image/png;base64,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" />
                </Box>
                <Flex boxShadow='base'  gap={5} rounded='md' bg='white'  w={{base:"80%",md:"50%",lg:"30%"}} m="auto" flexDir={"column"} p={6}>
                    <Flex  w={{base:"100%",md:"90%",lg:"60%"}} m="auto" flexDir={"column"} >
                        <Box h={"30%"} w="30%" m="auto">
                            <Image h={"100%"} src='./logo.png' />
                        </Box>
                        <Box>
                        <Text fontSize={{ base: "8px", md: "16px", lg: "20px" }} color="black" fontWeight={{base:"400",md:"600",lg:"700"}}>It's delight to have you onboard</Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: "8px", md: "10px", lg: "12px" }} color="gray" fontWeight={600}>help us know you better.</Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: "8px", md: "10px", lg: "12px" }} color="gray" fontWeight={600}>(This is how we optimize Wobot as per the business needs)</Text>
                        </Box>
                    </Flex>
                    <Flex flexDir={"column"} textAlign="left" gap={2}>

                        <Text fontSize={{ base: "8px", md: "12px", lg: "14px" }} color="gray" >Your name</Text>
                        <Input placeholder='eg. john Smith' fontSize={{ base: "8px", md: "12px", lg: "14px" }}/>


                        <Text fontSize={{ base: "8px", md: "12px", lg: "14px" }} color="gray" >Company name</Text>
                        <Input placeholder='eg. Alpha Inc.' fontSize={{ base: "8px", md: "12px", lg: "14px" }}/>

                        <Stack>
                            <Text fontSize={{ base: "8px", md: "12px", lg: "14px" }} color="gray">Industry</Text>
                            <Select placeholder='Select' fontSize={{ base: "8px", md: "12px", lg: "14px" }}/>
                        </Stack>
                    </Flex>
                    <Box >
                        <Text textAlign={"left"} fontSize={{ base: "8px", md: "12px", lg: "14px" }}>Number of Locations</Text>
                <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(5, 1fr)'}} gap={2} alignItems="center">
                            <GridItem   bg={"gray.200"}  >1-20</GridItem>
                            <GridItem   bg={"gray.200"} >21-50</GridItem>
                            <GridItem   bg={"gray.200"}>51-200</GridItem>
                            <GridItem   bg={"gray.200"}>201-500</GridItem>
                            <GridItem   bg={"gray.200"}>500+</GridItem>

                        </Grid>
                    </Box>
                    <Box w="100%">
                        <Button colorScheme='blue'fontSize={{ base: "12px", md: "14px", lg: "16px" }} w={"100%"}>Get Started</Button>
                    </Box>
                </Flex>
                <Text color={"gray"} p={5} fontSize={{ base: "12px", md: "14px", lg: "16px" }}>Terms of use | Privacy policy</Text>
            </Box>
        </Box>
    )
}

export default Wobotpage
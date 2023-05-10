import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Text,
    Stack,
    Heading,
    Divider,
    Center,
    Avatar,
    VStack,
    HStack,
    Flex,
} from '@chakra-ui/react'
import { ButtonGroup, Button } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

const EmployeeCard = (props) => {
    return (
        <>
            <Container>
                <Card
                    maxW='lg'
                    // direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    boxShadow={'lg'}
                    borderRadius={'lg'}
                >
                    <Flex flexDirection={'column'}>
                        <CardHeader>
                            <Flex gap={32} alignItems={'center'}>
                                <Avatar
                                    size='lg'
                                    name=''
                                    src=''
                                />
                                <Heading size='md'>Full Name</Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody paddingTop={0}>
                            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={6}>
                                <GridItem w='100%' h='5'><Text>Function : ??? {/* place the employee's informations here */}</Text></GridItem>
                                <GridItem w='100%' h='5'><Text>Address : ??? {/* place the employee's informations here */}</Text></GridItem>
                                <GridItem w='100%' h='5'><Text>Administrative Situation : ??? {/* place the employee's informations here */}</Text></GridItem>
                                <GridItem w='100%' h='5'><Text>Engaged Date : ??? {/* place the employee's informations here */}</Text></GridItem>
                            </Grid>
                        </CardBody>
                        <Divider />
                        <CardFooter
                            justify='space-evenly'
                            flexWrap='wrap'
                            gap={'8'}
                        >
                            <Button flex='1' variant='outline' colorScheme='blue' color={'blue'}>
                                View Details
                            </Button>
                            <Button flex='1' variant='outline' colorScheme='green' color={'green'} leftIcon={<EditIcon />}>
                                Edit
                            </Button>
                            <Button flex='1' variant='outline' colorScheme='red' color={'red'} leftIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </CardFooter>
                    </Flex>
                </Card>
            </Container>
        </>
    )
}

export default EmployeeCard;
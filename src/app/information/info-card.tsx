import { Heading, Image, Spinner, Stack, Text, VStack } from '@chakra-ui/react';

export default function InfoCard({ char }: { char: { name: string; image: string; status: string }}) {
    if (!char) {
        return null
    }
    const { name, image, status } = char
    return (
        <VStack spacing={2} p={4}>
            <Image
                src={image}
                alt={name}
                borderRadius='lg'
                boxSize='150px'
                fallback={<Spinner />}
                fallbackSrc='https://via.placeholder.com/150'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                <Text noOfLines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    Status: {status}
                </Text>
            </Stack>
        </VStack>
    )
}

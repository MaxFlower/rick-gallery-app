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
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                <Text>
                    test
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    Status: {status}
                </Text>
            </Stack>
        </VStack>
    )
}

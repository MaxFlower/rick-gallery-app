'use client'

import { useEffect } from 'react'
import { Button, Flex, Heading, VStack } from '@chakra-ui/react'

interface IErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset }: IErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Flex w='100%' height='100%' alignItems='center' justifyContent='center' direction='column'>
            <VStack spacing={4}>
                <Heading as={'h3'}>Something went wrong!</Heading>
                <Button variant='solid' colorScheme='blue' onClick={() => reset()}>
                    Try again
                </Button>
            </VStack>
        </Flex>
    )
}

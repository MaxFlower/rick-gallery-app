'use client'

import { Box, Button, FormControl, FormLabel, FormHelperText, Input, VStack } from '@chakra-ui/react'

interface FormValue { username: string; jobTitle: string }

export default function ProfileForm({ defaultValue = { username: '', jobTitle: '' }, btLabel, onSubmit }: { defaultValue?: FormValue, btLabel: string, onSubmit: (profileDate: FormValue) => void }) {
    function formSubmit(e) {
        e.preventDefault()
        onSubmit({
            username: e.target.elements['username'].value,
            jobTitle: e.target.elements['jobTitle'].value,
        })
    }

    return (
        <Box w='sm' p={4}>
            <form onSubmit={formSubmit} noValidate>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' name='username' autoComplete='username' defaultValue={defaultValue.username} />
                        <FormHelperText>We will never share your username.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Job title</FormLabel>
                        <Input type='text' name='jobTitle' defaultValue={defaultValue.jobTitle} />
                        <FormHelperText>We will never share your job title.</FormHelperText>
                    </FormControl>
                    <Button type='submit'>{btLabel}</Button>
                </VStack>
            </form>
        </Box>
    )
}

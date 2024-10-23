'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Box, Button, FormControl, FormLabel, FormHelperText, Input, VStack, FormErrorMessage } from '@chakra-ui/react'

interface FormValue { username: string; jobTitle: string }

interface IProfileFormProps {
    defaultValue?: FormValue
    btLabel: string
    onSubmit: (profileDate: FormValue) => void
}

export default function ProfileForm({ defaultValue = { username: '', jobTitle: '' }, btLabel, onSubmit }: IProfileFormProps) {
    const [formValues, setFormValues] = useState<FormValue>(defaultValue);
    const [errors, setErrors] = useState<FormValue>({ username: '', jobTitle: '' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors: FormValue = { username: '', jobTitle: '' };

        if (!formValues.username) {
            newErrors.username = 'Username is required';
            isValid = false;
        }
        if (!formValues.jobTitle) {
            newErrors.jobTitle = 'Job title is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formValues);
        }
    };

    return (
        <Box w="sm" p={4}>
            <form onSubmit={formSubmit} noValidate>
                <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.username}>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleInputChange}
                            autoComplete="username"
                        />
                        {!errors.username ? (
                            <FormHelperText>We will never share your username.</FormHelperText>
                        ) : (
                            <FormErrorMessage>{errors.username}</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={!!errors.jobTitle}>
                        <FormLabel>Job title</FormLabel>
                        <Input
                            type="text"
                            name="jobTitle"
                            value={formValues.jobTitle}
                            onChange={handleInputChange}
                        />
                        {!errors.jobTitle ? (
                            <FormHelperText>We will never share your job title.</FormHelperText>
                        ) : (
                            <FormErrorMessage>{errors.jobTitle}</FormErrorMessage>
                        )}
                    </FormControl>

                    <Button type="submit">{btLabel}</Button>
                </VStack>
            </form>
        </Box>
    )
}

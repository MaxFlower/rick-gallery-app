'use client'

import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Avatar, HStack, Text } from '@chakra-ui/react'
import { useAppContext } from '../hooks/context.hook'
import MultifunctionalModal from './multifunctional-modal'
import ProfileForm from './profile-form'

export default function ProfileMenu() {
    const { profile, updateProfile } = useAppContext()
    const [opened, setOpened] = useState<boolean>(false)

    if (profile === null || profile?.username === '' && profile?.jobTitle === '') {
        return null
    }

    function handleSubmit(profileData) {
        updateProfile(profileData)
        setOpened(false)
    }

    return (
        <>
            <HStack spacing={2}>
                <Menu>
                    <MenuButton>
                        <Avatar name={profile.username} src='https://bit.ly/broken-link' />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => setOpened(!opened)}>Edit profile</MenuItem>
                    </MenuList>
                </Menu>
                <Text as='b'>{profile.username} / {profile.jobTitle}</Text>
            </HStack>
            <MultifunctionalModal title='Profile data' opened={opened} handleClose={() => setOpened(!opened)}>
                <ProfileForm defaultValue={profile} btLabel='Submit' onSubmit={handleSubmit} />
            </MultifunctionalModal>
        </>
    )
}

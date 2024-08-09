'use client'

import { useEffect, useState } from 'react'
import { useAppContext } from '../../hooks/context.hook'
import ProfileForm from '../../components/profile-form'
import { Skeleton, Stack } from '@chakra-ui/react'
import MultifunctionalModal from '../../components/multifunctional-modal'
import Content from './content'

export default function InformationPage() {
    const { profile, updateProfile } = useAppContext()
    const [isIdentified, setIsIdentified] = useState<boolean>(false)

    useEffect(() => {
        setIsIdentified(profile !== null && profile?.username !== '' && profile?.jobTitle !== '')
    }, [profile])

    function handleSubmit(profileData) {
        updateProfile(profileData)
    }

    function CustomSkeleton() {
        return (
            <Stack>
                {new Array(5).map(() => <Skeleton height='24px' />)}
            </Stack>
        )
    }

    return (
        <>
            {isIdentified ? <Content /> : <CustomSkeleton />}
            <MultifunctionalModal title='Identify yourself' opened={!isIdentified} isProtected={true}>
                <ProfileForm btLabel='Submit' onSubmit={handleSubmit} />
            </MultifunctionalModal>
        </>
    )
}

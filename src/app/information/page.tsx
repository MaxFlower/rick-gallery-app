'use client'

import { useAppContext } from '../../hooks/context.hook'
import ProfileForm from '../../components/profile-form'
import { Skeleton, Stack } from '@chakra-ui/react'
import MultifunctionalModal from '../../components/multifunctional-modal'
import Content from './content'

export default function InformationPage() {
    const { profile, updateProfile } = useAppContext()
    const isIdentified = profile !== null && profile?.username !== '' && profile?.jobTitle !== ''

    function handleSubmit(profileData) {
        updateProfile(profileData)
    }

    function CustomSkeleton() {
        return (
            <Stack>
                {new Array(5).map((_, i) => <Skeleton height='24px' key={`skeleton-${i}`} />)}
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

'use client';

import { useEffect, useState } from 'react'
import { useAppContext } from '../../hooks/context.hook'
import MultifunctionalModal from '../../components/multifunctional-modal'

export default function InformationPage() {
    const { profile, updateProfile } = useAppContext()
    const [isIdentified, setIsIdentified] = useState<boolean>(false)

    useEffect(() => {
        setIsIdentified(profile !== null && profile?.username !== '' && profile?.jobTitle !== '')
    }, [profile])

    return (
        <MultifunctionalModal title='Identify yourself' opened={!isIdentified} isProtected={true}>
            test
        </MultifunctionalModal>
    )
}

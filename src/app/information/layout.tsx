'use client'

import { Stack, Grid, GridItem, Heading } from '@chakra-ui/react'
import { AppContextProvider } from '../../hooks/context.hook'
import { ReactNode } from 'react'
import ProfileMenu from '../../components/profile-menu';

export default function InformationLayout({ children }: { children: ReactNode }) {
    return (
        <AppContextProvider>
            <Grid
                templateAreas={`"header" "main" "footer"`}
                gridTemplateRows={'1fr 10fr 0.5fr'}
                h='100vh'
                gap='1'
            >
                <GridItem p='4' bg='green.50' area={'header'}>
                    <ProfileMenu />
                </GridItem>
                <GridItem p='4' bg='grey.100' area={'main'} height='100%' overflow='scroll'>
                    {children}
                </GridItem>
                <GridItem p='4' bg='blue.100' area={'footer'}>
                    <Stack>
                        <Heading as='h5' size='sm'>
                            (c) {new Date().getFullYear()} Maksim Tsvetkov 🪴
                        </Heading>
                    </Stack>
                </GridItem>
            </Grid>
        </AppContextProvider>
    )
}

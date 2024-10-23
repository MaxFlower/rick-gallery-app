import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
    title: 'Rick gallery app',
    description: 'Demo project from Maksim Tsvetkov'
};

interface IRootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    )
}

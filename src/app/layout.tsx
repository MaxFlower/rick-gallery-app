import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
    title: 'Rick gallery app',
    description: 'Demo project from Maksim Tsvetkov'
};

export default function RootLayout({ children }: { children: ReactNode }) {
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

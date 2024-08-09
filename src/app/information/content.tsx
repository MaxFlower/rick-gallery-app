import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Gallery from './gallery'
import client from '../../lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

export default function ContentBox() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const currentPage = parseInt(searchParams.get('page') ?? '1', 10)
    function handlePageChange(page: number) {
        const params = new URLSearchParams(searchParams);
        if (page > 1) {
            params.set('page', String(page));
        } else {
            params.delete('page');
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <ApolloProvider client={client}>
            <Gallery currentPage={currentPage} onPageChange={handlePageChange} />
        </ApolloProvider>
    )
}

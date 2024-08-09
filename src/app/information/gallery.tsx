import { useQuery, gql } from '@apollo/client'
import { Heading, VStack } from '@chakra-ui/react';

interface GQLGetCharacters {
    characters: {
        info: {
            count: number;
            pages: number;
        }
        results: {
            name: string;
            status: string;
            image: string;
        }[]
    }
}

const GET_ITEMS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count,
        pages
      }
      results {
        name,
        image,
        status
      }
    }
  }
`;

export default function Gallery({ currentPage }: { currentPage: number }) {
    const {data, loading, error} = useQuery<GQLGetCharacters>(GET_ITEMS, {
        variables: {page: currentPage, filter: {name: 'rick'}},
    });

    if (error) return 'bad'

    return (
        <VStack spacing={4} height='100%'>
            <Heading as='h2' size='lg'>
                Rick gallery 🖼️ 🖼️ 🖼️
            </Heading>
            {loading ? '... loading' : JSON.stringify(data.characters.results)}
        </VStack>
    )
}
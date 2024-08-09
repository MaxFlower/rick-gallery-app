import { useQuery, gql } from '@apollo/client'
import {
    Button,
    Heading,
    Stack,
    VStack,
    Text,
    Spinner,
    Wrap,
    WrapItem,
    CardHeader,
    CardBody,
    CardFooter,
    Card,
    Image
} from '@chakra-ui/react'
import { useState } from 'react'
import InfoCard from './info-card'
import MultifunctionalModal from '../../components/multifunctional-modal'

interface CharacterDetails {
    name: string;
    status: string;
    image: string;
}

interface GQLGetCharacters {
    characters: {
        info: {
            count: number;
            pages: number;
        }
        results: CharacterDetails[]
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

export default function Gallery({ currentPage, onPageChange }: { currentPage: number, onPageChange: (page: number) => void }) {
    const {data, loading, error} = useQuery<GQLGetCharacters>(GET_ITEMS, {
        variables: {page: currentPage, filter: {name: 'rick'}},
    });
    const [selected, setSelected] = useState<CharacterDetails | null>(null)
    const isCharacterSelected = selected !== null

    if (error) return 'bad'

    return (
        <VStack spacing={4} height='100%'>
            <Heading as='h2' size='lg'>
                Rick gallery 🖼️ 🖼️ 🖼️
            </Heading>
            <Wrap spacing={4} p={4} justify='center' align='center' height='100%' overflow='scroll'>
                {loading
                    ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
                    : data.characters.results.map((character, idx) => (
                        <WrapItem key={character.name + idx}>
                            <Card maxW={200}>
                                <CardHeader>
                                    <Heading size='md'>{character.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Image
                                        src={character.image}
                                        alt={character.name}
                                        borderRadius='lg'
                                        boxSize='150px'
                                        fallback={<Spinner />}
                                        fallbackSrc='https://via.placeholder.com/150'
                                    />
                                    <Text noOfLines={3} p={2}>
                                        Your guess, is he 'Alive', 'Dead' or 'unknown'?
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button onClick={() => setSelected(character)}>Answer</Button>
                                </CardFooter>
                            </Card>
                        </WrapItem>
                    ))
                }
            </Wrap>

            <Stack spacing={4} align='center' direction='row'>
                <Button colorScheme='teal' isDisabled={currentPage === 1} onClick={() => onPageChange(currentPage -1)}>
                    Previous
                </Button>
                <Button colorScheme='teal' isDisabled={!loading && currentPage === data.characters?.info.pages} onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </Button>
                <Text as='b'>Current page: {currentPage} of {!loading ? data.characters.info.pages : '...'}</Text>
            </Stack>

            <MultifunctionalModal title='Character overview' opened={isCharacterSelected} handleClose={() => setSelected(null)}>
                <InfoCard char={selected} />
            </MultifunctionalModal>
        </VStack>
    )
}
import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query Characters($page: Int) {
        characters(page: $page) {
            info {
                pages
            },
            results {
                id,
                name,
                gender,
                status,
                location {
                    name
                },
                image,
                created
            }
        }
    }
`;

export default GET_CHARACTERS;
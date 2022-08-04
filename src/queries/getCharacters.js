import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query Characters($page: Int, $gender: String) {
        characters(page: $page, filter: {gender: $gender}) {
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
import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query {
        characters(page: 55) {
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
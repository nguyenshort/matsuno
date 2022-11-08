import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            content
            avatar
            name
            slug
            primary
        }
    }
`

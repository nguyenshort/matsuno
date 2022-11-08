import gql from 'graphql-tag'

export const CREATE_PLATFORM = gql`
  mutation CreatePlatform($input: CreatePlatformInput!) {
    createPlatform(input: $input) {
      id
      content
      name
      slug
      children {
        id
        name
        slug
        content
      }
    }
  }
`

export const UPDATE_PLATFORM = gql`
  mutation UpdatePlatform($input: UpdatePlatformInput!) {
    updatePlatform(input: $input) {
      id
      content
      name
    }
  }
`

export const CREATE_TECHNOLOGY = gql`
  mutation CreateTechnology($input: CreateTechnologyInput!) {
    createTechnology(input: $input) {
      id
      content
      name
      slug
    }
  }
`

export const UPDATE_TECHNOLOGY = gql`
    mutation UpdateTechnology($input: UpdateTechnologyInput!) {
        updateTechnology(input: $input) {
            id
            name
            content
            slug
        }
    }
`

export const DELETE_TECHNOLOGY = gql`
    mutation RemoveTechnology($input: RemoveTechnologyInput!) {
        removeTechnology(input: $input) {
            id
            slug
            platform {
                id
            }
        }
    }
`

export const UPDATE_GRID_PLATFORM = gql`
    mutation UpdateGridPlatform($input: UpdateGridPlatformInput!) {
        updateGridPlatform(input: $input) {
            id
            content
            name
            slug
            children {
                id
                name
                slug
                content
            }
        }
    }
`

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      name
      description
      rating
      image
      director
      year
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        rating
        image
        director
        year
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moviesByName = /* GraphQL */ `
  query MoviesByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moviesByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        rating
        image
        director
        year
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

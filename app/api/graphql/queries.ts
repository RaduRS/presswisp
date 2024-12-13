import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query GetArticles {
    getArticles {
      id
      body
      date
    }
  }
`;

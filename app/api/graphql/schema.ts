import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Article {
    id: ID!
    body: String!
    date: String!
  }

  # Input for creating a new article
  input CreateArticleInput {
    body: String!
  }

  # Query for fetching articles
  type Query {
    getArticles: [Article!]! # Returns a list of all articles
  }

  # Mutation for creating an article
  type Mutation {
    createArticle(input: CreateArticleInput!): Article! # Creates a new article
  }
`;

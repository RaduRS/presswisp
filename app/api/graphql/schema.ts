import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Article {
    id: ID!
    title: String!
    description: String!
    path: String!
    body: String!
    date: String!
  }

  # Input for creating a new article
  input CreateArticleInput {
    title: String!
    description: String!
    path: String!
    body: String!
  }

  # Query for fetching articles
  type Query {
    getArticles: [Article!]! # Returns a list of all articles
    getArticle(path: String!): Article
  }

  # Mutation for creating an article
  type Mutation {
    createArticle(input: CreateArticleInput!): Article! # Creates a new article
  }
`;

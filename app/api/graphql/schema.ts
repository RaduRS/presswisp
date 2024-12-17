import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Article {
    id: ID!
    title: String!
    metaTitle: String!
    description: String!
    path: String!
    headline: Boolean!
    readingTime: Int!
    body: String!
    date: String!
  }

  # Input for creating or updating an article
  input ArticleInput {
    id: ID
    title: String!
    metaTitle: String!
    description: String!
    path: String!
    headline: Boolean!
    readingTime: Int!
    body: String!
  }

  # Query for fetching articles
  type Query {
    getArticles: [Article!]! # Returns a list of all articles
    getArticle(path: String!): Article
    getHeadlineArticle: Article
  }

  # Mutation for creating an article
  type Mutation {
    upsertArticle(input: ArticleInput!): Article! # Creates a new article
  }
`;

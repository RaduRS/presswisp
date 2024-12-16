import gql from "graphql-tag";

export const UPSERT_ARTICLE = gql`
  mutation UpsertArticle($input: ArticleInput!) {
    upsertArticle(input: $input) {
      id
      title
      metaTitle
      description
      path
      headline
      body
      date
    }
  }
`;

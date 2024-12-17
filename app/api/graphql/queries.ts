import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query GetArticles {
    getArticles {
      id
      title
      metaTitle
      description
      path
      headline
      readingTime
      body
      date
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($path: String!) {
    getArticle(path: $path) {
      id
      title
      metaTitle
      description
      path
      headline
      readingTime
      body
      date
    }
  }
`;

export const GET_HEADLINE_ARTICLE = gql`
  query GetHeadlineArticle {
    getHeadlineArticle {
      id
      title
      description
      readingTime
      date
      path
      body
    }
  }
`;

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getArticles: {
            // eslint-disable-next-line
            merge(existing = [], incoming) {
              return [...incoming]; // Replace with incoming data (equivalent to `merge: false`)
            },
          },
        },
      },
    },
  }),
});

export default client;

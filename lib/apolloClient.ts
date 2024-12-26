import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
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

import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://presswisp-git-main-radurs-projects-d4653025.vercel.app"
    : process.env.NEXT_PUBLIC_BASE_URL;

const client = new ApolloClient({
  uri: `${baseUrl}/api/graphql`,
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

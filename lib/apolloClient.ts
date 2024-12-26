import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://presswisp-git-main-radurs-projects-d4653025.vercel.app/api/graphql"
      : "http://localhost:3000/api/graphql",
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

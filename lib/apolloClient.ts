import { ApolloClient, InMemoryCache } from "@apollo/client";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:3000`; // dev SSR should use localhost
};

const client = new ApolloClient({
  uri: `${getBaseUrl()}/api/graphql`,
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

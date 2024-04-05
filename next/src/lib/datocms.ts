import { GraphQLClient } from "graphql-request";

interface RequestOptions {
  query: string;
  variable?: Record<string, any>;
};

const request = <T>({ query, variable }: RequestOptions) => {
  const endpoint: string = process.env.NEXT_PUBLIC_DATOCMS_API_BASEURL || "";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request<T>(query, variable);
};

export default request;

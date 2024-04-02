import { GraphQLClient } from "graphql-request";

interface RequestOptions {
  query: string;
  variable?: Record<string, any>;
  preview?: boolean;
};

const request: React.FC<RequestOptions> = ({ query, variable, preview }) => {
  const endpoint: string = preview
    ? "https://graphql.datocms.com/preview"
    : "https://graphql.datocms.com";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variable);
};

export default request;

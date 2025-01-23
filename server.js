import { ApolloServer, gql } from "apollo-server";

// Schema Dafinition Language
const typeDefs = gql`
  # 사용자의 모든 요청
  type Query {
    # GET /text
    text: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

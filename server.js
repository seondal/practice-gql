import { ApolloServer, gql } from "apollo-server";

// Schema Dafinition Language
const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }

  # 사용자의 모든 요청
  type Query {
    # GET /allTweets
    allTweets: [Tweet]

    # GET /tweet/:id
    tweet(id: ID): Tweet
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

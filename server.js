import { ApolloServer, gql } from "apollo-server";

// fake DB
const tweets = [
  { id: "1", text: "hello" },
  { id: "2", text: "hell" },
  { id: "3", text: "hel" },
  { id: "4", text: "he" },
];

// Schema Dafinition Language
const typeDefs = gql`
  type User {
    id: ID!
    username: String! # String
    firstName: String # String | null
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  # 사용자의 모든 요청
  type Query {
    # GET /allTweets
    allTweets: [Tweet!]!

    # GET /tweet/:id
    tweet(id: ID!): Tweet

    ping: String!
  }

  type Mutation {
    # POST /postTweet
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

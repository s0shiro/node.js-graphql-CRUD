import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./models/typeDefs.js";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Database connection
mongoose
  .connect(MONGO_URI, {
    dbName: "student", // Specify the name of the new database here
  })
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

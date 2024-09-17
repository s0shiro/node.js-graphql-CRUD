import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String
    welcome(name: String): String
    students: [Student]
    student(id: ID): Student
  }

  # Student object
  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  # Mutation
  type Mutation {
    create(firstName: String, lastName: String, age: Int): Student
    update(id: ID, firstName: String, lastName: String, age: Int): Student
    delete(id: ID): Student
  }
`;

export { typeDefs };

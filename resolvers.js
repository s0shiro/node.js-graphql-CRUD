import Student from "./models/Student.js";

const resolvers = {
  Query: {
    hello: () => "GraphQL is Awesome",
    welcome: (parent, { name }) => `Hello ${name}`,
    students: async () => await Student.find({}),
    student: async (_, { id }) => await Student.findById(id),
  },
  Mutation: {
    create: async (_, args) => {
      const { firstName, lastName, age } = args;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      await newStudent.save();
      return newStudent;
    },
  },
};

export { resolvers };

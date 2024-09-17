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
    update: async (parent, args) => {
      const { id } = args;
      const result = await Student.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (parent, args) => {
      const { id } = args;
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
        throw new Error(`Student with ID ${id} not found`);
      }
      return deletedStudent;
    },
  },
};

export { resolvers };

// GraphQL Resolvers
export const resolvers = {
  Query: {
    greetings: () => "GraphQL is Awesome",
    welcome: (parent, args) => `Welcome to GrapQl ${args.name}`,
  },
};

module.exports = {
  pathPrefix: "/gatsby-screenshot-demo",
  plugins: [
    {
      resolve: "gatsby-plugin-screenshot",
      options: {
        region: "us-west-2",
        lambdaName: "screenshot",
      },
    },
    "gatsby-transformer-yaml",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}

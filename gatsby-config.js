module.exports = {
  pathPrefix: "/gatsby-screenshot-demo",
  plugins: [
    "gatsby-transformer-screenshot",
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

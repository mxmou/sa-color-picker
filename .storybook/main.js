module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  babel: async (options) => ({
    ...options,
    "plugins": [
      ["@babel/plugin-proposal-private-property-in-object", {
        "loose": true
      }
      ],
      ["@babel/plugin-proposal-private-methods", {
        "loose": true
      }
      ]

    ]
  }),

}
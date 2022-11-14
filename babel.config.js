module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-typescript"],
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current",
          "ie": "10",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "corejs": "^3.6.5",
        "useBuiltIns": "entry"
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    "@babel/plugin-transform-runtime",
    // // Stage 2
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // // Stage 3
    ["@babel/plugin-proposal-class-properties", { "loose": false }],

  ]
}

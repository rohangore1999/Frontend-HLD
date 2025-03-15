const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  // It always takes entry point as .js file
  entry: {
    main: "./js/script.js",
  },

  // where to save the output file
  output: {
    filename: "[name].bundle.js", // [name] -> key of entry point

    // What This Does in Practice
    //    -> If your project is at /Users/rohangore/Documents/projects/frontend-hld/px-to-rem-demo, then:
    //    -> __dirname would be /Users/rohangore/Documents/projects/frontend-hld/px-to-rem-demo
    //    -> path.resolve(__dirname, "dist") resolves to /Users/rohangore/Documents/projects/frontend-hld/px-to-rem-demo/dist

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Webpack compiles your entry point (script.js) and all its dependencies
  //    - The HtmlWebpackPlugin generates an HTML file based on your template
  //    - All these files exist only in memory, not on disk
  //    - The dev server serves these in-memory files to your browser

  // The static: "./dist" setting isn't concerned with what's in the dist folder at startup. Instead:
  //    - The webpack dev server first checks its in-memory compiled assets
  //    - If a requested file isn't found there, it then checks the dist folder
  //    - If the file isn't in either place, you get a 404 error
  devServer: {
    static: "./dist",
    hot: true,
  },

  plugins: [
    // HtmlWebpackPlugin: Creates an HTML file that automatically includes your bundled JavaScript and CSS. It uses your index.html as a template.

    // - It takes your index.html as a template
    // - It automatically injects script and stylesheet links where it thinks they should go:
    // - JavaScript files are typically injected just before the closing </body> tag or at the end of <head> with a defer attribute (as in your case)
    // - CSS files are typically injected into the <head> section
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    // MiniCssExtractPlugin: Puts your CSS into a separate file instead of keeping it inside the JavaScript.
    new MiniCssExtractPlugin({
      filename: "[name].css", // [name] -> key of entry point
    }),
  ],

  // This is where the px-to-rem conversion happens.
  module: {
    rules: [
      {
        test: /\.css$/, // First test: "Is this a CSS file?" (test: /\.css$/)

        // If yes, send it through these processors in reverse order:
        //    1. postcss-loader: Applies the px-to-rem (help of "postcss-pxtorem") conversion (changes 16px to 1rem, etc.)
        //    2. css-loader: Understands CSS imports and URLs
        //    3. MiniCssExtractPlugin.loader: Takes the processed CSS and saves it as a separate file
        use: [
          MiniCssExtractPlugin.loader, // 3

          "css-loader", // 2
          
          {
            loader: "postcss-loader", // 1
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-pxtorem",
                    {
                      rootValue: 16, // 16px -> 1rem
                      unitPrecision: 5, // 5 decimal places
                      propList: ["*"], // Apply to all properties
                      selectorBlackList: [],
                      replace: true, // Replace original values with rem values
                      mediaQuery: false, // Don't process media queries
                      minPixelValue: 0, // Don't process if value is less than 0
                      exclude: /node_modules/i, // Don't process node_modules
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};

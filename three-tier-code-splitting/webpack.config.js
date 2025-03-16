const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Webpack configuration for three-tier UI rendering with code-splitting
 */
module.exports = {
  mode: "development",
  devtool: "eval-source-map", // we are using eval-source-map for development, we can see the original code in the browser under Sources tab -> select the folder
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    clean: true,
  },

  // Code-splitting configuration
  optimization: {
    splitChunks: {
      // "all": Split all types of chunks (initial chunks, async chunks, and non-initial chunks)
      // "async" (default): Only split chunks that are loaded asynchronously (via dynamic imports)
      // "initial": Only split chunks that are part of the initial page load

      chunks: "all", // split all chunks all, async, initial.

      // Any code that is statically imported (using regular import statements) and not matched by other cacheGroups rules automatically goes into the main bundle
      cacheGroups: {
        // Loaiding Vendor libraries (React, etc.) as high priority
        // Seperate vendor libraries from app code so that we can cache them separately for longer duration(as they rarely change).
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 40,
        },

        // Tier 2 components
        tier2: {
          test: /[\\/]tier2[\\/]/,
          name: "tier2",
          chunks: "all",
          priority: 30,
        },

        // Common code
        // If above pattern doesn't work, then use this pattern to split common code.
        common: {
          name: "common",
          minChunks: 2, // Only put code in this bundle if it's used in at least 2 different chunks
          priority: 20,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, // Apply this rule to any file ending with .js or .jsx"
        exclude: /node_modules/, // Exclude node_modules from being processed
        use: {
          loader: "babel-loader", // Use babel loader to transpile the code from modern JavaScript/JSX into browser-compatible code

          options: {
            // Configure Babel with:
            //   - @babel/preset-env: For modern JavaScript features
            //   - @babel/preset-react: For JSX syntax
            //   - @babel/plugin-syntax-dynamic-import: For supporting import() syntax needed for code splitting
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },

      {
        test: /\.css$/, // for css files
        // "Process these files with css-loader, then style-loader"
        // The loaders run from right to left:
        // css-loader: Interprets @import and url() in CSS
        // style-loader: Injects CSS into the DOM via style tags
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Creates an HTML file: Generates an HTML file to serve your webpack bundles
  // Uses a template: Takes your existing HTML file as a starting point
  // Injects scripts: Automatically adds <script> tags for all generated bundles
  // Updates on changes: Regenerates the HTML when your bundles change

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // When someone imports a file without specifying an extension, try these extensions in this order.
  // eg: import Button from './components/Button';
  // Webpack will look for:
  //    -> ./components/Button.js first
  //    -> ./components/Button.jsx if the .js file doesn't exist

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    // Tells the server where to serve static files from
    // In your case, it serves files from the "public" directory
    // This is where your index.html with the skeleton UI lives
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    open: true,
  },
};

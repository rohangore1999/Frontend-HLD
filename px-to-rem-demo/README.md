# For better accessibility [px to rem Conversion with Webpack]

ref ~ [Meta - Changing font sizes for better accessibility](https://engineering.fb.com/2020/05/08/web/facebook-redesign/#:~:text=Changing%20font%20sizes%20for%20better%20accessibility)

## Why Use Rem Units?

Rem (root em) units are relative to the font size of the root element (html). This means:

- Users who set custom font sizes in their browsers will see proportionally scaled layouts
- Developers can implement font size controls that scale the entire UI consistently
- The design stays coherent when text is resized

## Project Structure

```
px-to-rem-demo/
├── css/
│   └── style.css        # Source CSS with px units
├── js/
│   └── script.js        # JavaScript for font size toggling and CSS import
├── dist/                # Generated output (after build)
│   ├── main.bundle.js   # Bundled JavaScript
│   ├── main.css         # Compiled CSS with rem units
│   └── index.html       # Generated HTML with proper references
├── index.html           # Source HTML template
├── package.json         # Project dependencies and scripts
├── webpack.config.js    # Webpack configuration
└── README.md            # This file
```

## How It Works

1. We write CSS using pixel values (which designers typically provide)
2. JavaScript imports the CSS using `import "../css/style.css";`
3. Webpack processes our CSS through PostCSS and converts px values to rem
4. The bundled output includes JavaScript and CSS with rem units for accessibility
5. JavaScript can adjust the root font size to scale the entire UI proportionally

## Webpack Configuration Highlights

- Uses `postcss-loader` with `postcss-pxtorem` plugin to convert px to rem
- Configured with a base font size of 16px (`rootValue: 16`)
- Extracts CSS into a separate file using `MiniCssExtractPlugin`
- Uses `HtmlWebpackPlugin` to inject JS and CSS references into HTML
- Includes a development server with hot reloading

## Setup Instructions

1. Install dependencies:

   ```
   npm install
   ```

2. For development with hot reloading:

   ```
   npm start
   ```

3. For production build:

   ```
   npm run build
   ```

4. For development with automatic rebuilding (without dev server):

   ```
   npm run watch
   ```

After building, the complete application will be in the `dist` folder.

## Key Features

- Click the button to toggle between normal and large text sizes
- Notice how all elements scale proportionally
- Check the console for additional information
- The entire UI scales because all dimensions use rem units

## How the px-to-rem Conversion Works

In the webpack configuration, the `postcss-loader` processes CSS files with the `postcss-pxtorem` plugin:

```javascript
{
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        [
          "postcss-pxtorem",
          {
            rootValue: 16,
            propList: ["*"],
            // other options...
          },
        ],
      ],
    },
  },
}
```

This converts pixel values in CSS:

- `16px` becomes `1rem`
- `32px` becomes `2rem`
- `8px` becomes `0.5rem`

## Real-World Application

In a production environment, you would:

1. Add more sophisticated webpack optimizations (code splitting, tree shaking)
2. Implement more accessibility controls (color schemes, contrast settings)
3. Save user preferences to localStorage or a database
4. Consider adding a more comprehensive design system
# Frontend---HLD

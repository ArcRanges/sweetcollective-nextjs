const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // modifyVars: { "@primary-color": "#04f" }, // optional
  lessVarsFilePath: "./src/styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    localIdentName:
      process.env.NODE_ENV !== "production"
        ? "[local]--[hash:base64:4]"
        : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  reactStrictMode: true,
  images: {
    domains: [
      "i.etsystatic.com",
      "www.shingirl.com",
      "sweetcollective-static.s3.us-west-1.amazonaws.com",
      "images.ctfassets.net",
    ],
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  webpack(config) {
    return config;
  },
});

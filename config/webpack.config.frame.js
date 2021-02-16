const jsx_rule = {
  test: /\.jsx?$/,
  use: [
    { loader: "cache-loader" },
    {
      loader: "@sucrase/webpack-loader",
      options: { transforms: ["jsx"] },
    },
  ],
};

const node_rule = { test: /\.node$/, use: "node-loader" };

const native_rule = {
  test: /\.(m?js|node)$/,
  parser: { amd: false },
  use: {
    loader: "@marshallofsound/webpack-asset-relocator-loader",
    options: { options: { outputAssetBase: "native_modules" } },
  },
};

const electron_config_frame = {
  entry: "./main-frame.js",
  module: { rules: [node_rule, jsx_rule, native_rule] },
  devServer: { hot: true },
};

module.exports=electron_config_frame;
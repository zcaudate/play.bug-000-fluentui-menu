const jsx_rule = {
  test: /\.jsx?$/,
  use: [
    { loader: "cache-loader" },
    { loader: "@sucrase/webpack-loader", options: { transforms: ["jsx"] } },
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

const css_rule = {
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
};

const raw_rule = function (test) {
  return {
    test: test,
    use: [{ loader: "cache-loader" }, { loader: "raw-loader" }],
  };
};

const electron_config_inner = {
  module: {
    rules: [node_rule, jsx_rule, native_rule, css_rule, raw_rule(/\.lua$/)],
  },
  plugins: [],
  resolve: { extensions: [".js", ".jsx", ".css", ".json", ".lua"] },
};

module.exports=electron_config_inner;
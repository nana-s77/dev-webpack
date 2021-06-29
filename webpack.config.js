//output pathに指定するパスがOSによって異なることを防ぐためにpathモジュールを読み込む
const path = require("path");
//cssファイルを別ファイルに書き出すためのプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
  //modeの指定
  mode: "development",
  //エントリーポイントの設定
  entry: "./src/index.js",
  //出力の設定
  output: {
    //出力するファイル名
    filename: "main.js",
    // 出力先のパス絶対パスを指定
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { url: false },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
  ],
};
const paths = require("./paths")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: paths.src,
  output: {
    path: paths.build,
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      "vue": "vue/dist/vue.esm.js",
      '@': resolve('src')
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    //   {
    //     test: /\.js$/,
    //     use: "babel-loader",
    //   }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: paths.template, // 模板地址
        filename: "index.html", // 输出名
        title: "手动搭建的vue开发环境", // index.html 通过 <%= htmlWebpackPlugin.options.title %> 获取的变量值
      },
      
    ),
    new VueLoaderPlugin(),
  ],
}

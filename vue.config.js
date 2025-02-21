const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        "url": require.resolve("url/"),
        "tty": require.resolve("tty-browserify"),
        "process": require.resolve("process/browser"),
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("stream-http"),
        "net": false,  //Adicionado para evitar erro com 'net'
        "dgram": false, //Adicionado para evitar erro com 'dgram'
        "child_process": false //Adicionado para evitar erro com 'child_process'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        stream: require.resolve('stream-browserify')
      })
    ]
  }
});
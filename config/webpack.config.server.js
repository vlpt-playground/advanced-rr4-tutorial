'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');


const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.serverRenderJs,
  output: {
    // 정해준 서버 경로에 render.js 라는 파일명으로 저장합니다
    path: paths.server,
    filename: 'render.js',
    libraryTarget: 'commonjs2' // node 에서 불러올 수 있도록, commonjs2 스타일로 번들링 합니다
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
        // 자바스크립트 이외의 파일들을 무시합니다.
        {
            exclude: [
                /\.(js|jsx)$/,
                /\.json$/
            ],
            loader: 'ignore',
        },
      // 자바스크립트는 Babel 을 통하여 트랜스파일링합니다
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      }
    ],
  },
  plugins: [
    // 필수 플러그인만 넣어줍니다
    new webpack.DefinePlugin(env.stringified),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ]
};

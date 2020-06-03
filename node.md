# webpack

## 坑

文档错误
    const CleanWebpackPlugin = require('clean-webpack-plugin')

    new CleanWebpackPlugin(['dist']),

正解

    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    new CleanWebpackPlugin(),

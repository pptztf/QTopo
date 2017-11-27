const ENV = process.env.NODE_ENV;
const IsDev = (ENV === 'dev') ? true : false;
const webpack = require('webpack'),
    path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    config = {
        output: {
            path: path.resolve("./public/topo"),//打包后的文件存放的地方
            filename: "[name].js"
        },
        module: {//在配置文件里添加JSON loader
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader"
                            // options: {
                            //     modules: true,
                            // }
                        }, {
                            loader: "postcss-loader"
                        }]
                    })
                }
            ]
        },
        externals: {
            jquery: 'window.$'
        },
        plugins: [
            new webpack.BannerPlugin('author:qiyc'),
            new ExtractTextPlugin({
                filename: "[name].css", allChunks: true
            })
        ]//合并并压缩输出到目录
    };
if (IsDev) {
    config.devtool = 'eval-source-map';
} else {
    //压缩代码插件
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}
module.exports = config;
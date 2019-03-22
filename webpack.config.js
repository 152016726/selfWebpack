var htmlwp = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude:/node_module/
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // babel:{
    //     presets:['es2015'],
    //     plugins:['transform-runtime']   // 这句代码就是为了解决打包.vue文件不报错
    // },
    plugins:[
        new htmlwp({
            title: '首页',             //  生成的页面标题
            filename: 'index.html',   //  webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面的底部，才能实现页面的自动刷新
            template: 'index1.html'    //  根据index1.html这个模板来生成
        })
    ]
}
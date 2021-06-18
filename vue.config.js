const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {

  // pages: {
  //   index: {
  //     // page 默认的入口
  //     entry: 'src/main.js',
  //     // 模板来源
  //     // template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     // filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     // title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   activity: {

  //     entry: 'src/modules/activity/activity.js',

  //     // template: 'public/activity.html',

  //     // filename: 'activity.html',

  //     // title: 'activity page',

  //     chunks: ['chunk-vendors', 'chunk-common', 'activity']
  //   },
  //   // 只有entry属性时，直接用字符串表示模块入口
  //   client: 'src/modules/welfare/welfare.js'
  // },

  chainWebpack: config => {

    // 添加别名
    // config.resolve.alias
    //   .set("@", resolve("src"))
    //   .set("@assets", resolve("src/assets"))
    //   .set("@components", resolve("src/components"))
    //   .set("@view", resolve("src/view"))
    //   .set("@router", resolve("src/router"))
    //   .set("@store", resolve("src/store"))
    //   .set("@mixin", resolve("src/mixins"))
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
            // Provide path to the file with resources
            // 要公用的scss的路径
            resources: './src/css/base.scss'
        })
        .end()
    })
    // 开启图片压缩
    // config.module.rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({
    //     bypassOnDebug: true
    //   }).end()

  },

//   css: {
//     loaderOptions: {
//       sass: {
//        prependData: `@import "@/css/base.scss";`
//       }
//     }
//   },



  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts),
  indexPath: "index.html",
  filenameHashing: true, // 文件名哈希化 防止缓存
  productionSourceMap: false, // 去除开发环境的map文件
}
module.exports = {
    configureWebpack: {
        resolve: {
            //alias取别名,@是src的缩写
            alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'pages': '@/pages',
            }
        }
    }
}

module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 75,
                        propList: ['*'],
                        selectorBlackList: ['van']
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: "http://iv4ncz.natappfree.cc/pet/public/index.php"
    }
}

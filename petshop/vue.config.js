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
        proxy: "http://qnq4x5.natappfree.cc/pet/public/index.php"
    }
}

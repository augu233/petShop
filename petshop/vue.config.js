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
<<<<<<< HEAD
        proxy: "http://takt25.natappfree.cc/pet/public/index.php"
=======
        proxy: "http://yqeujg.natappfree.cc/pet/public/index.php"
>>>>>>> ac1b9a200af777a775dc3af475ec63cd8b718b93
    }
}

module.exports = {
    modules: {
        rules: [
            {
                tests: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "bable-loader"
                }
            }
        ]
    }
}
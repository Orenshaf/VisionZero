const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: "/assets/",
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
        ]
    }
};
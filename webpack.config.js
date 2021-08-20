//requerimos path el cual es un modulo que esta dentro de node
const path = require('path');
//instancio el plugin que instale
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//creamos un modulo que vamos a exportar con esta configuracion
module.exports = {
//configuramos la entrada
    entry: './src/index.js',
//aqui es donde vamos a guardar nuestros archivos resultantes cuando hagamos
//la compilacion
    output:{
    //aqui decimos donde se va a guardar
    //resolve: nos permite detectar el directorio donde nos encontramos, y el dirrectorio,
    //donde vamos a guardar los archivos ("dist")
        path: path.resolve(__dirname,'dist'),
        //le colocamos un nombre al archivo resultante
        filename: 'bundle.js'
    },
    //resolemos las extensiones que vamos a utilizar para nuestro proyecto
    resolve: {
        extensions: ['.js','.jsx'],
    },
    //creamos un modulo con las reglas necesarias para nuestro proyecto
    module:{
        rules:[
            {
                //expresion regular para identificar .js y .jsx
                test: /\.(js|jsx)$/,
                //excluimos la carpeta node_modules
                exclude: /node_modules/,
                //utilizamos el loader de babel que instalamos
                use: {
                    loader: "babel-loader",
                },
            },
            {
                //regla para trabajar con los html
                test: /\.html$/,
                //utilizamos el loader de html que instalamos
                use:{
                        loader: 'html-loader',
                    },
            },
            {
                //regla para trabajar con los css
                test: /\.(s*)css$/,
                //utilizamos el loader de html que instalamos
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader' ,
                    'sass-loader'
                ]
            },
        ]
    },
    //llamamos los plugin que necesitamos
    plugins:[
        //creamos una nueva referencia al HtmlWebpackPlugin
        //y le pasamos un objeto con la configuracion que necesitamos
        new HtmlWebpackPlugin({
            //donde esta ubicado el template y el nombre
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}
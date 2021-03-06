const path=require("path");
module.exports={
    // 模式
    mode:"development",
    // 入口
    entry: "./src/index.js",
    // 輸出
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    // DevServer 設定
    devServer:{
      static:"./dist"
    },
    // 模組載入規則
    module:{
        rules:[
            {
                test:/\.scss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
};
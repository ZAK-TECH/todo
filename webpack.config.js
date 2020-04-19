const path=require('path')

module.exports={
    mode:"development",
    entry:{
        myfile:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'build'),
        filename:'js/[name].js'
 
    }
}
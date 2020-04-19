const path=require('path')

module.exports={
    mode:"development",
    entry:{
        renderDOM:'./src/RenderDOM.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'js/[name].js'
 
    }
}
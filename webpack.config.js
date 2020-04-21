const path=require('path')
const mode=process.env.isDev ?'development':'production'
console.log(mode);
module.exports={
    mode,
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'js/[name].js'
 
    }
}
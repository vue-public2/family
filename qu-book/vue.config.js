const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

//解决跨域
module.exports={
    devServer:{
      port:3000,
      proxy:{
        '/api':{   //这里的/dev指的是自己设定的对接暗号
           target:'http://bookstoreapi.shuqireader.com',//目标地址
           changeOrigin:true,
//           //  pathRewrite:{
//           //    '^/dev':''       //这里将/dev清除
//           //  }
        }
      }
    },

    //起别名
    chainWebpack:(config)=>{
      config.resolve.alias
      .set('@',resolve('./src'))
      .set('style',resolve('./src/common/style'))
      .set('utils',resolve('./src/common/utils'))
      .set('components',resolve('./src/components'))
      .set('pages',resolve('./src/pages'))
    }
  }
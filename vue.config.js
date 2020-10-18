const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'blog_static',
  indexPath: 'blog.html'
  //publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
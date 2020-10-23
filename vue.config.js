<<<<<<< HEAD
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    assetsDir: 'blog_static',
    indexPath: 'blog.html'
        //publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
=======
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'blog_static',
  indexPath: 'blog.html',
  //publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
>>>>>>> 10f06de9ccb2838bcb374c3ec5a29b0511949700
}
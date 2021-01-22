import { requests } from './index'

export function isLogin() {
  return requests({
    url: '/is_login',
  })
}

export function getIlove() {
  return requests({
    url: '/get_i_love',
  })
}

export function getSongInfoAndLrc(rid) {
  return requests({
    url: '/get_songinfoandlrc',
    params: { rid }
  })
}

export function getBlog(p=1) {
  return requests({
    url: '/get_blog',
    params: { p }
  })
}

export function getBlogContent(bid) {
  return requests({
    url: '/get_blog_content',
    params: { bid }
  })
}

export function addBlog(title, summary, content) {
  return requests({
    url: '/add_blog',
    method: 'post',
    data: { title, summary, content }
  })
}
import { requests } from './index'


export function getSiteInfo() {
  return requests({
    url: '/get_site_info',
  })
}


export function isLogin() {
  return requests({
    url: '/is_login',
  })
}

export function setLogout() {
  return requests({
    url: '/logout',
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

export function getBlog(pn = 1, rn = 5) {
  return requests({
    url: '/get_blog',
    params: { pn, rn }
  })
}

export function getBlogContent(bid) {
  return requests({
    url: '/get_blog_content',
    params: { bid }
  })
}

export function getComment(aid) {
  return requests({
    url: '/get_blog_comment',
    params: { aid, }
  })
}

export function getUserInfo() {
  return requests({
    url: '/get_userinfo'
  })
}

export function clickLike(aid) {
  return requests({
    url: '/add_like',
    params: { aid }
  })
}

export function getMessage(pn = 1, rn = 5) {
  return requests({
    url: '/get_message',
    params: { pn, rn }
  })
}

export function getCategory() {
  return requests({
    url: '/get_category'
  })
}

export function getArticleCategory(cid) {
  return requests({
    url: '/get_article_category',
    params: { cid }
  })
}


// POST请求

export function addComment(aid, comment) {
  return requests({
    url: '/add_comment',
    method: 'post',
    data: { aid, comment }
  })
}

export function addMessage(message) {
  return requests({
    url: '/add_message',
    method: 'post',
    data: { message }
  })
}


export function changeUserInfo(userinfo) {
  return requests({
    url: '/change_userinfo',
    method: 'post',
    data: userinfo
  })
}

export function changeAvatar(data) {
  return requests({
    url: '/change_avatar',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
    data: data
  })
}



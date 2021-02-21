import { requests } from './index'


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
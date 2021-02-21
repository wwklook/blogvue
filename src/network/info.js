import { requests } from './index'


//get request
export function getSiteInfo() {
  return requests({
    url: '/get_site_info',
  })
}

export function getMyComic(pn, rn = 16) {
  return requests({
    url: '/get_mycomic',
    params: { pn, rn }
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

export function getUserInfo() {
  return requests({
    url: '/get_userinfo'
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


// post request

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
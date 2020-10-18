import { requests } from './index'

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

export function postBlog(title, summary, content) {
    return requests({
        url: '/postblog',
        method: 'post',
        data: { title, summary, content }
    })
}
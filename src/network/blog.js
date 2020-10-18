import { requests } from './index'

export function getIlove() {
    return requests({
        url: '/get_i_love',
    })
}

export function postBlog(title, summary, content) {
    return requests({
        url: '/postblog',
        method: 'post',
        data: { title, summary, content }
    })
}
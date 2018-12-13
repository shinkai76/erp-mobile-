import request from '@/utils/request'

export function login (loginForm) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      user_name: loginForm.user_name,
      password: loginForm.password,
      set_of_book: loginForm.set_of_book
    }
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

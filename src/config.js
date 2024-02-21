const isAutoLogin = true

const dummyUser = {
  id: 'user-1234567',
  userName: 'abcdef'
}

const endpoints = {
  imgur: 'https://api.imgur.com/3/image',
  hinpyoukai: 'https://hinpyoukai-api-omc3n2et7a-an.a.run.app'
}

const headers = {
  "Content-Type": "application/json",
}

const imgurKey = {
  client_id: '7c34970b70aef09',
  client_secret: 'b8d5bee0d6e73c7b7a5145c8fd98342a378bffb2'
}

const imgurKey2 = {
  client_id: 'd54e761e787745e',
  client_secret: '04094166a07009ec5b3da3282ef8fa6265dd6840'
}

const version = '1.0.3'

export { dummyUser, isAutoLogin, endpoints, imgurKey, headers, version }
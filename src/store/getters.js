const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  realName: state => state.user.realName,
  username: state => state.user.username,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  uid: state => state.user.uid,
  introduction: state => state.user.introduction,
  verify: state => state.user.verify,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  coins: state => state.app.coins
}
export default getters
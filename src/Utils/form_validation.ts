// 表单验证

export default {
  // 用户名校验
  username(value: any) {
    if (!value) return '请输入用户名！'
    // 规则：字母开头1-10 任意字符
    if (!/^.{1,10}$/.test(value)) return '请输入1-10个任意字符！'
    return ''
  },
  // 用户校验且校验唯一性
  async accountApi(value: any) {
    if (!value) return '请输入用户名！'
    if (!/^.{1,20}$/.test(value)) return '请输入1-20个任意字符！'
    // 服务器端校验
    // const data = await userAccountCheck(value)
    // if (data.result.valid) return '用户名已存在'
    // return true
  },
  // 手机号
  tel(value: any) {
    if (!value) return '请输入手机号!'
    // 规则：1开头 3-9 之间  9个数字
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式不对!'
    return ''
  },
  // 密码校验
  password(value: any) {
    if (!value) return '请输入密码'
    // 规则：密码格式6-24个任意字符！
    if (!/^\w{6,24}$/.test(value)) return '请输入6-24个任意字符！' //'密码6-24个字符'
    return ''
  },
  // 密码校验
  rePassword(value: any, { form }: any) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    // form表单数据对象
    if (value !== form.password) return '需要和密码保持一致'
    return ''
  },
  code(value: any) {
    if (!value) return '请输入短信验证码'
    // 规则： 6个数字
    if (!/^\d{6}$/.test(value)) return '短信验证码6个数字'
    return ''
  },
  // 邮箱
  isEmali(value: any) {
    if (!value) return '请输入邮箱'
    // 规则： 6个数字
    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) return 'error'
    return 'success'
  }
}

import CryptoJS from 'crypto-js'
// 加密秘钥 默认8位
// 秘钥 abcdeegd
const key = 'abcdeegd'
const keyHex = CryptoJS.enc.Utf8.parse(key)
// 加密
const encryptDES = (message: any) => {
  if (message) {
    const encrypt = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypt.toString()
  } else {
    return ''
  }
}
// 解密
const decryptDES = (ciphertext: any) => {
  if (ciphertext) {
    const decrypted = CryptoJS.DES.decrypt(ciphertext, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
  } else {
    return ''
  }
}
export { encryptDES, decryptDES }

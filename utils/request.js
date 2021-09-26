/*
 * @Date: 2021-09-20 20:08:44
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-25 01:21:42
 */
const http = 'https://www.ourwarframe.com/app/api'
// const http = 'http://localhost:3000/app/api'
const request = (url, data, method) =>{
  return new Promise((resolve, reject)=>{
    uni.request({
      url: http + url,
      data: data,
      header: {
        'Content-Type': 'application/json',
      },
      method: method,
      success: ({ data }) => {
        resolve(data)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

export default request
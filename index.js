/*!
 * @author liyuelong1020@gmail.com
 * @date 2020/3/11 011
 * @description Description
 */

const download = require('./src/download.js')

download([
    'http://172.31.1.235:3001/file_1.zip',
    'http://172.31.1.235:3001/file_2.exe',
    'http://172.31.1.235:3001/file_3.exe'
], './download', {}).then(successList => {
  console.log('download success: ', successList)
})

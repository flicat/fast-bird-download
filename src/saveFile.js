/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/11/30 030
 * @description Description
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

module.exports = function saveFile(data, name, dir) {
    fs.writeFile(path.join(dir, name), data, err => {
        if(err) throw err;
        console.log(chalk.green(name + ' file saved'))
    })
}

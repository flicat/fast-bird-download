/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/12/13 013
 * @description Description
 */

module.exports = function getTimeName () {
    let date = new Date()
    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0'),
        String(date.getHours()).padStart(2, '0'),
        String(date.getMinutes()).padStart(2, '0'),
        String(date.getSeconds()).padStart(2, '0'),
        String(date.getMilliseconds()).padStart(4, '0')
    ].join('')
}
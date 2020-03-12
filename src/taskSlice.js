/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/12/14 014
 * @description Description
 */

// 将列表任务分成多分执行，callback 必须返回 Promise 对象
module.exports = async function (list, count, callback) {
    if (!list.length) {
        return null
    }
    let handlerStack = []
    let errorStack = []
    let tempList = list.concat()
    let result

    return new Promise((resolve, reject) => {
        let handler = async (item) => {
            if (item) {
                try {
                    await callback(item)
                } catch (e) {
                    errorStack.push(e)
                    console.log(e && e.stack || e)
                }

                let next = tempList.shift()
                if (next) {
                    handlerStack.push(handler(next))
                } else {
                    if (!result) {
                        result = Promise.all(handlerStack).then(() => {
                            if (errorStack.length) {
                                return Promise.reject(new Error('Some tasks failed to execute'))
                            }
                        })
                    }
                    resolve(result)
                }
            }
        }
        for (let i = 0; i < count; i ++) {
            handlerStack.push(handler(tempList.shift()))
        }
    })
}

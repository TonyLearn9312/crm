
import { getLanguageJson } from '@/api/api'

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}

export function welcome() {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  let index = Math.floor((Math.random()*arr.length))
  return arr[index]
}
// 国际化处理
export function international (value) {
  let lang = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : 'English'
  let language = []
  getLanguageJson('Chinese',lang).then(res => {
    if (res.code === 200) {
      language = res.data
      if (language) {
        for (let i in language) {
          if (language[i].key==value) {
            return language[i].value
          }
        }
        return value
      } else {
        return value
      }
    }
  })
}
/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  let event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj(obj) {
  if (!(typeof obj == 'object')) {
    return;
  }
  return obj;
}

/**
 * 时间格式化
 * @param value
 * @param fmt
 * @returns {*}
 */
export function formatDate(value, fmt) {
  var regPos = /^\d+(\.\d+)?$/;
  if(regPos.test(value)){
    //如果是数字
    let getDate = new Date(value);
    let o = {
      'M+': getDate.getMonth() + 1,
      'd+': getDate.getDate(),
      'h+': getDate.getHours(),
      'm+': getDate.getMinutes(),
      's+': getDate.getSeconds(),
      'q+': Math.floor((getDate.getMonth() + 3) / 3),
      'S': getDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt;
  }else{
    //TODO
    value = value.trim();
    return value.substr(0,fmt.length);
  }
}


/**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 随机生成数字
 *
 * 示例：生成长度为 12 的随机数：randomNumber(12)
 * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
 *
 * @param1 最小值 | 长度
 * @param2 最大值
 * @return int 生成后的数字
 */
export function randomNumber() {
  // 生成 最小值 到 最大值 区间的随机数
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  if (arguments.length === 1) {
    let [length] = arguments
  // 生成指定长度的随机数字，首位一定不是 0
    let nums = [...Array(length).keys()].map((i) => (i > 0 ? random(0, 9) : random(1, 9)))
    return parseInt(nums.join(''))
  } else if (arguments.length >= 2) {
    let [min, max] = arguments
    return random(min, max)
  } else {
    return Number.NaN
  }
}

/**
 * 随机生成字符串
 * @param length 字符串的长度
 * @param chats 可选字符串区间（只会生成传入的字符串中的字符）
 * @return string 生成的字符串
 */
export function randomString(length, chats) {
  if (!length) length = 1
  if (!chats) chats = '0123456789qwertyuioplkjhgfdsazxcvbnm'
  let str = ''
  for (let i = 0; i < length; i++) {
    let num = randomNumber(0, chats.length - 1)
    str += chats[num]
  }
  return str
}

/**
 * 下划线转驼峰
 * @param string
 * @returns {*}
 */
export function underLine2CamelCase(string){
  return string.replace( /_([a-z])/g, function( all, letter ) {
    return letter.toUpperCase();
  });
}

/**
 * 如果值不存在就 push 进数组，反之不处理
 * @param array 要操作的数据
 * @param value 要添加的值
 * @param key 可空，如果比较的是对象，可能存在地址不一样但值实际上是一样的情况，可以传此字段判断对象中唯一的字段，例如 id。不传则直接比较实际值
 * @returns {boolean} 成功 push 返回 true，不处理返回 false
 */
export function pushIfNotExist(array, value, key) {
  for (let item of array) {
    if (key && (item[key] === value[key])) {
      return false
    } else if (item === value) {
      return false
    }
  }
  array.push(value)
  return true
}
/**
 * @description: 获取数组的label值
 * @param : value 传入的value值
 * @return: label 对应的值
 * @Author: HuangCheng
 */
export function getArrItem(value, arr) {
  const len = arr.length;
  for (var i = 0; i < len; i++) {
    if (value === arr[i].value) {
      return arr[i].label
    }
  }
}
/**
 * @description: 保留小数点几位
 * @param: num需要做小数点处理的值,n需要保留的位数
 * @return: 返回对应的值
 * @Author: HuangCheng
 */
export function getPointNumber (num, n) {
  num = Number(num)
  num = num.toString()
  var result = ""
  var zeroResult = function(n){
      var zero = ""
      for(var i = 0;i<n;i++){
          zero+="0"
      }
      return zero;
  }
  if(num%1 == 0){//整数
      result = num + "."+zeroResult(n)
  }else{//小数
      var num1 = num.split(".")
      if(num1[1].length<n){
        result = num1[0]+"."+num1[1]+zeroResult(n-num1[1].length)
      } else{
        result = num1[0]+"."+num1[1].substring(0,n)
      }
  }
  let s = result.split('.')
  result = s[1]==='' ? s[0] : result
  return result
}
// 防抖函数
export function debounce (fn,wait) {
  let timer = null
  return function () {
    let context = this
    let ar = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context,ar)
    },wait)
  }
}
// 科学计数法转换小数
export function toNumberStr(num) {
  let result = String(num);
  // 判断一下有没有减号
  if (result.indexOf('-') >= 0) {
    result = '0' + String(Number(result) + 1).substr(1);
  }
  return result
}
import Vue from "vue";

//将整数部分逢三一断
Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  let intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartFormat
})

//MT
Vue.filter('Mt', (value) => {
  if (value === 'MetaTrade 4 Trading Server') {
    return 'MT4'
  }
  if (value === 'MetaTrade 5 Trading Server') {
    return 'MT5'
  }
})

// 国际化语言
Vue.filter('Translate', (value) => {
  let language = JSON.parse(window.localStorage.getItem('langList'))
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
})

/** 字符串超长截取省略号显示 */
Vue.filter('ellipsis', function (value, vlength = 25) {
  if(!value){
    return ""
  }
  console.log('vlength: '+ vlength)
  if (value.length > vlength) {
    return value.slice(0, vlength) + '...'
  }
  return value
})

/**
 * @description: 获取数组的label值
 * @param : value 传入的value值
 * @return: label 对应的值
 * @Author: HuangCheng
 */
Vue.filter('getArrItem', function(value, arr) {
  const len = arr.length
  for (var i = 0; i < len; i++) {
    if (value === arr[i].value) {
      return arr[i].label
    }
  }
  return value
})

// 千分位，保留两位小数
Vue.filter('price', function price(num, n=2){
  if (num===undefined) {
    return
  }
  num = Number(num)
  num = num.toString()
  var result = ""
  var zeroResult = function(n){
    var zero = ""
    for(var i = 0;i<n;i++){
      zero+="0"
    }
    return zero
  }
  if (num%1 == 0) {//整数
    result = num + "."+zeroResult(n)
  } else {//小数
    var num1 = num.split(".")
    if (num1[1].length < n) {
      result = num1[0]+"."+num1[1]+zeroResult(n-num1[1].length)
    } else {
      result = num1[0]+"."+num1[1].substring(0,n)
    }
  }
  let s = result.split('.')
  result = s[1]==='' ? s[0] : result
  return result.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,')
})
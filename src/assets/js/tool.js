// 通用方法函数集
/***
 * 设备检查
 * @returns {*}
 */

export function checkDevice() {
  const ua = navigator.userAgent;
  const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua);
  const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua);
  const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua);
  const isWechat = /micromessenger/i.test(ua);

  return {
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isWechat
  };
}

/***
 * 检查手机号
 * @param phone
 * @returns boolean
 */
export function checkMobile(phone) { // 检查手机号
  let re = /^1\d{10}$/;
  return re.test(phone);
}

/***
 * 获取url中'?'符后的字串
 * @param location
 * @returns {*}
 */
export function getSearch(location) {
  let url = location.search; //
  let searchObj = {};
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      searchObj[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return searchObj;
}

/***
 * 是否为正整数
 * @param s
 * @returns boolean
 */
export function isPositiveInteger(s) { //  是否为正整数
  let re = /^[0-9]*[1-9][0-9]*$/;
  return re.test(s);
}

/***
 * 去除字符串空格和替换回车换行
 * @param str
 * @param replaceBreak
 * @returns string
 */
export function stringTrim(str, replaceBreak) {
  str = str.replace(/^\s\s*/, '');
  let ws = /\s/;
  let i = str.length;
  let rs = '';
  while (ws.test(str.charAt(--i))) {
    rs = str.slice(0, i + 1);
  }
  if (!rs) {
    return '';
  }
  if (!replaceBreak) {
    return rs;
  } else {
    return rs.replace(/(?:\r\n|\r|\n)/g, '');
  }
}

/***
 * 获取浏览器缓存
 * @param key
 * @param cacheType
 * @param dataType
 * @returns string
 */
export function getCache(key, cacheType = 'l', dataType = 'json') {
  let _position = cacheType === 's' ? 'sessionStorage' : 'localStorage';
  let _data = window[_position].getItem(key);
  if (dataType === 'json' && _data) {
    // 存在字符串null的情况
    return _data === 'null' ? null : JSON.parse(_data);
  }
  return _data;
}

/***
 * 设置浏览器缓存 setCache('syj2-xx',{},'s' or 'l' or undefined)
 * @param key
 * @param data
 * @param cacheType
 */
export function setCache(key, data, cacheType = 'l') {
  let _position = cacheType === 's' ? 'sessionStorage' : 'localStorage';
  // 浏览器不支持
  if (window[_position]) {
    try {
      // IOS-5手机浏览器支持cache，但是奇葩的是储存容量为几kb，可能发生错误
      window[_position].setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
    } catch (e) {
      console.error('缓存数据时发生错误：', e);
    }
  } else {
    console.error(`您的浏览器不支持${_position}`);
  }
}

/***
 * 清除缓存根据key
 * @param key
 * @param data
 * @param cacheType
 */
export function clearCache(key, cacheType = 'l') {
  let _position = cacheType === 's' ? 'sessionStorage' : 'localStorage';
  window[_position].removeItem(key);
}

/***
 * 导出 excel
 * @param url
 * @param param
 */
export function exportExcel(url, param) {
  let queryString = '';
  for (let key in param) {
    queryString += `${key}=${typeof param[key] === 'object' ? JSON.stringify(param[key]) : param[key]}&`;
  }
  window.open(url + '?' + queryString);
}

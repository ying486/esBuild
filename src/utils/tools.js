/**
 * 从数组中获取新加入的对象
 * @param oldVal
 * @param newVal
 * @returns {number}
 */
export const getNewObjFromList = (oldVal, newVal) => {
  for (let i = 0; i < oldVal.length; i++) {
    if (newVal[i].key !== oldVal[i].key) {
      return i;
    }
  }
  return newVal.length - 1;
};

/**
 * 判断数据类型
 * @type {{isBoolean(*=): boolean, isObject(*=): boolean, isFunction(*=): boolean, isNumber(*=): boolean, isRegExp(*=): boolean, isNull(*=): boolean, isString(*=): boolean, isDate(*=): boolean, isArray(*=): boolean, isUndefined(*=): boolean, _typeOf(*=): (string|*)}}
 */
export const checkTools = {
  _typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    if (obj instanceof Element) {
      return 'element';
    }
    return map[toString.call(obj)];
  },
  isFunction(obj) {
    return this._typeOf(obj) === 'function'
  },
  isBoolean(obj) {
    return this._typeOf(obj) === 'boolean'
  },
  isNumber(obj) {
    return this._typeOf(obj) === 'number'
  },
  isString(obj) {
    return this._typeOf(obj) === 'string'
  },
  isDate(obj) {
    return this._typeOf(obj) === 'date'
  },
  isRegExp(obj) {
    return this._typeOf(obj) === 'regExp'
  },
  isArray(obj) {
    return this._typeOf(obj) === 'array'
  },
  isUndefined(obj) {
    return this._typeOf(obj) === 'undefined'
  },
  isNull(obj) {
    return this._typeOf(obj) === 'null'
  },
  isObject(obj) {
    return this._typeOf(obj) === 'object'
  }
};

export const compareDifferent = (initVal, newVal) => {
  let obj = []
  obj.push(`v-model="${newVal.props['v-model']}"`)
  for (let item of Object.keys(initVal.props)) {
    // 去除默认属性
    if (initVal.props[item] !== newVal.props[item]) {
      let type = typeof newVal.props[item]
      switch (type) {
        case 'boolean':
          obj.push(`:${item}="${newVal.props[item]}"`)
          break;
        default:
          obj.push(`${item}="${newVal.props[item]}"`)
          break;
      }
    }
  }
  return obj
}
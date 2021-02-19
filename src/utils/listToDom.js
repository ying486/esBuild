import Vue from 'Vue';
import { templateCode } from "./template";
import { configList } from "../views/config";

const defaultType = ["Input", "i-switch", "InputNumber", "Rate", "DatePicker", "TimePicker", "Cascader"]

// 处理数据
export const handleData = (list) => {
  let body = "";
  for (let box of list) {
    let items = [];
    for (let item of box.children) {
      items.push(_judgeType(item))
    }
    const str = _getDombySort(box, items);
    body = body + str;
  }
  // 代码美化
  const beautifyData = Vue.prototype.jsBeautify.html_beautify(templateCode(body), {
    indent_size: 2,
    space_in_empty_paren: true,
  });
  return beautifyData;
}

// 根据排序类型生成不同Dom
function _getDombySort(box, items) {
  let str = ""
  switch (box.name) {
    case 'Row':
      items.forEach((el, index) => {
        str = str + `<Col span="${box.colList[index]}">${el}</Col>`
      });
      str = `<Row>${str}</Row>`
      return str;
    case 'Column':
      str = items.join(" ")
      return str;
  }
}
// 判断标签类型
function _judgeType(item) {
  const initVal = configList.find((e) => e.type === item.type);
  if (defaultType.includes(item.type)) {
    return _handleItem(initVal, item)
  } else {
    return _handleItemSec(initVal, item)
  }
}

// 处理单个标签
function _handleItem(initVal, obj) {
  const list = _getProps(initVal, obj);
  const data = list.join(" ");
  return `<FormItem label="${obj.props.labelName}">
            <${obj.type} ${data}></${obj.type}>
          </FormItem>`;
}
// 处理单个标签（含内标签类型）
function _handleItemSec(initVal, obj) {
  const childTag = obj.childTag; // 子标签名
  const newObj = _getPropsSec(initVal, obj);
  const group = newObj.group.join(" ");
  const child = newObj.child.join(`></${childTag}><${childTag} `);
  return `<FormItem label="${obj.props.labelName}">
            <${obj.type} ${group}>
              <${childTag} ${child}></${childTag}>
            </${obj.type}>
          </FormItem>`;
}

// 获取与默认值不同的属性
function _getProps(initVal, newVal) {
  let list = []
  let initV = JSON.parse(JSON.stringify(initVal))
  delete initV.props['v-model']

  for (let key in newVal.props) {
    // 不为默认的属性时
    if (initV.props[key] !== newVal.props[key] && key !== 'labelName') {
      list.push(_getDomPropStr(key, newVal.props))
    }
  }
  return list
}

// 获取与默认值不同的属性（含内标签类型）
function _getPropsSec(initVal, newVal) {
  let group = []
  let child = []
  let initV = JSON.parse(JSON.stringify(initVal))
  delete initV.props.group['v-model']
  delete initV.props.child[0].label

  const initGroupProps = initV.props.group
  const initChildProps = initV.props.child[0]
  const groupProps = newVal.props.group
  const childProps = newVal.props.child

  for (let key in groupProps) {
    // 不为默认的属性时
    if (initGroupProps[key] !== groupProps[key] && key !== 'labelName') {
      group.push(_getDomPropStr(key, groupProps))
    }
  }
  for (let item of childProps) {
    for (let key in item) {
      // 去除值为默认的属性
      if (initChildProps[key] !== item[key]) {
        child.push(_getDomPropStr(key, item))
      }
    }
  }
  const obj = { group, child }
  return obj
}

// 将键值对转化为Dom中的属性
function _getDomPropStr(propName, obj) {
  let type = typeof obj[propName]
  switch (type) {
    case 'string':
      return `${propName}="${obj[propName]}"`
    case 'object':
      return `:${propName}="REPLACE"`
    default:
      return `:${propName}="${obj[propName]}"`
  }
}

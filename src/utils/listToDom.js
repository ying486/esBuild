import Vue from 'Vue';
import { templateCode } from "./template";
import { configList } from "../views/config";

// 处理数据
export const handleData = (list) => {
  let body = "";
  for (let box of list) {
    let items = "";
    for (let item of box.children) {
      const temp = _judgeType(item);
      items = items + temp;
    }
    const sortType = `<div class='${box.name}'>${items}</div>`;
    body = body + sortType;
  }
  // 代码美化
  const beautifyData = Vue.prototype.jsBeautify.html_beautify(templateCode(body), {
    indent_size: 2,
    space_in_empty_paren: true,
  });
  return beautifyData;
}

// 判断标签类型
function _judgeType(item) {
  const initVal = configList.find((e) => e.type === item.type);
  if (item.type.includes(['Input'])) {
    return _handleItem(initVal, item)
  } else {
    return _handleItemSec(initVal, item)
  }
}

// 处理单个标签
function _handleItem(initVal, obj) {
  const list = _getProps(initVal, obj);
  const data = list.join(" ");
  return `<${obj.type} ${data}></${obj.type}>`;
}
// 处理单个标签（含内标签类型）
function _handleItemSec(initVal, obj) {
  const newObj = _getPropsSec(initVal, obj);
  const group = newObj.group.join(" ");
  const child = newObj.child.join(" ");
  return `<${obj.type} ${group}>
    <${obj.childTag} ${child}>
    </${obj.childTag}>
  </${obj.type}>`;
}

// 获取与默认值不同的属性
function _getProps(initVal, newVal) {
  let list = []
  delete initVal['v-model']
  for (let item of Object.keys(initVal.props)) {
    // 去除值为默认的属性
    if (initVal.props[item] !== newVal.props[item]) {
      let type = typeof newVal.props[item]
      switch (type) {
        case 'string':
          list.push(`${item}="${newVal.props[item]}"`)
          break;
        default:
          list.push(`:${item}="${newVal.props[item]}"`)
          break;
      }
    }
  }
  return list
}

// 获取与默认值不同的属性（含内标签类型）
function _getPropsSec(initVal, newVal) {
  let group = []
  let child = []
  delete initVal.props.group['v-model']
  delete initVal.props.child[0].label

  const initGroupProps = initVal.props.group
  const initChildProps = initVal.props.child[0]
  const groupProps = newVal.props.group
  const childProps = newVal.props.child

  for (let item in groupProps) {
    // 去除值为默认的属性
    if (initGroupProps[item] !== groupProps[item]) {
      let type = typeof groupProps[item]
      switch (type) {
        case 'string':
          group.push(`${item}="${groupProps[item]}"`)
          break;
        default:
          group.push(`:${item}="${groupProps[item]}"`)
          break;
      }
    }
  }

  for (let item of childProps) {
    for (let key in item) {
      // 去除值为默认的属性
      if (initChildProps[key] !== item[key]) {
        let type = typeof item[key]
        switch (type) {
          case 'string':
            child.push(`${key}="${item[key]}"`)
            break;
          default:
            child.push(`:${key}="${item[key]}"`)
            break;
        }
      }
    }
  }
  const obj = { group, child }
  return obj
}
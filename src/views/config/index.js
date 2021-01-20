export const configList = [
  // Input
  {
    type: "Input",
    name: "Input 输入框",
    options: {
      label: "Input",
      'v-model': 'defaultInput',
      type: 'text', // ['text','password','textarea','url','email','date','number','tel']
      size: 'default', // ['default','large','small']
      placeholder: "",
      maxlength: null,
      'show-word-limit': false,
      rows: null,
      icon: '',
      prefix: '',
      suffix: '',
      clearable: false,
      disabled: false,
      readonly: false,
      password: false,
      search: false,
      'enter-button': false,
      autosize: false,
      number: false,
      autofocus: false,
    },
    styles: [
      {
        name: "text-align",
        value: "right", // ["left", "center", "right"],
      },
    ],
  },
  // Radio
  {
    type: "Radio",
    name: "Radio 单选框",
    options: {
      label: "单选名",
      readonly: false,
    },
    styles: [
      {
        name: "text-align",
        value: "right",
      },
    ],
  },
]
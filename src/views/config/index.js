export const configList = [
  // Input
  {
    type: "Input",
    name: "Input 输入框",
    props: {
      labelName: "Input",
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
    type: "RadioGroup",
    name: "Radio 单选框",
    childTag: "Radio",
    props: {
      labelName: "单选名",
      group: {
        'v-model': 'defaultRadio',
        type: "", // "button"
        size: 'default', // ['default','large','small']
        vertical: false
      },
      member: {
        label: ["Radio 1"],
        disabled: false,
        size: 'default', // ['default','large','small']
        border: false,
      },
    },
    styles: [
      {
        name: "text-align",
        value: "right",
      },
    ],
  },
]
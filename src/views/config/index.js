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
  // RadioGroup
  {
    type: "RadioGroup",
    name: "Radio 单选框组",
    childTag: "Radio",
    props: {
      labelName: "Radio",
      group: {
        'v-model': 'defaultRadio',
        size: 'default', // ['default','large','small']
        type: null, // "button"
        vertical: false
      },
      child: [
        {
          label: "label 1",
          size: 'default', // ['default','large','small']
          disabled: false,
          border: false,
        },
      ]
    },
    styles: [
      {
        name: "text-align",
        value: "right",
      },
    ],
  },
  // CheckboxGroup
  {
    type: "CheckboxGroup",
    name: "CheckboxGroup 多选框组",
    childTag: "Checkbox",
    props: {
      labelName: "Checkbox",
      group: {
        'v-model': 'defaultCheckbox',
        size: 'default', // ['default','large','small']
      },
      child: [
        {
          label: "label 1",
          size: 'default', // ['default','large','small']
          disabled: false,
          border: false,
        },
      ]
    },
    styles: [
      {
        name: "text-align",
        value: "right",
      },
    ],
  },
  // Switch
  {
    type: "i-switch",
    name: "Switch 开关",
    props: {
      labelName: "Switch",
      'v-model': 'defaultSwitch',
      size: 'default', // ['default','large','small']
      disabled: false,
      'true-color': '',
      'false-color': '',
      loading: false
    },
    styles: [
      {
        name: "text-align",
        value: "right", // ["left", "center", "right"],
      },
    ],
  },
  // InputNumber
  {
    type: "InputNumber",
    name: "InputNumber 数字输入框",
    props: {
      labelName: "InputNumber",
      'v-model': 'defaultInputNumber',
      size: 'default', // ['default','large','small']
      placeholder: "",
      max: Infinity,
      min: -Infinity,
      step: 1,
      precision: null,
      'controls-outside': false,
      disabled: false,
      readonly: false,
      editable: true,
      'active-change': false
    },
    styles: [
      {
        name: "text-align",
        value: "right", // ["left", "center", "right"],
      },
    ],
  },
  // Rate
  {
    type: "Rate",
    name: "Rate 评分",
    props: {
      labelName: "Rate",
      'v-model': 'defaultRate',
      count: 5,
      character: "",
      icon: "",
      'allow-half': false,
      disabled: false,
      'show-text': false,
      clearable: false,
    },
    styles: [
      {
        name: "text-align",
        value: "right", // ["left", "center", "right"],
      },
    ],
  },
  // DatePicker
  {
    type: "DatePicker",
    name: "DatePicker 日期选择器",
    props: {
      labelName: "DatePicker",
      'v-model': 'defaultDatePicker',
      size: 'default', // ['default','large','small']
      type: "date", // ["date", "daterange", "datetime","datetimerange","year","month"]
      format: "",
      placement: "bottom-start", // ["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","right","right-start","right-end"]
      placeholder: "",
      'start-date': null,
      separator: " - ",
      multiple: false,
      confirm: false,
      disabled: false,
      clearable: true,
      readonly: false,
      editable: true,
      capture: true,
      'split-panels': false,
      'show-week-numbers': false,
    },
    styles: [
      {
        name: "text-align",
        value: "right", // ["left", "center", "right"],
      },
    ],
  },
  // ColorPicker
  // {
  //   type: "ColorPicker",
  //   name: "ColorPicker 颜色选择器",
  //   props: {
  //     labelName: "ColorPicker",
  //     'v-model': 'defaultColorPicker',
  //     size: 'default', // ['default','large','small']
  //     // format: "hex", // ["hsl","hsv","hex","rgb"]
  //     disabled: false,
  //     editable: true,
  //     alpha: false,
  //     hue: true,
  //     recommend: false,
  //     capture: true
  //   },
  //   styles: [
  //     {
  //       name: "text-align",
  //       value: "right", // ["left", "center", "right"],
  //     },
  //   ],
  // },
]
export const routeMap = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home'),
        children: [
            {
                path: 'Input',
                name: 'Input',
                component: () => import('../views/models/inputProps'),
            },
            {
                path: 'RadioGroup',
                name: 'RadioGroup',
                component: () => import('../views/models/radioGroupProps'),
            },
            {
                path: 'CheckboxGroup',
                name: 'CheckboxGroup',
                component: () => import('../views/models/checkboxGroupProps'),
            },
            {
                path: 'i-switch',
                name: 'i-switch',
                component: () => import('../views/models/switchProps'),
            },
            {
                path: 'InputNumber',
                name: 'InputNumber',
                component: () => import('../views/models/inputNumberProps'),
            },
            {
                path: 'Rate',
                name: 'Rate',
                component: () => import('../views/models/rateProps'),
            },
            {
                path: 'DatePicker',
                name: 'DatePicker',
                component: () => import('../views/models/datePickerProps'),
            },
            {
                path: 'TimePicker',
                name: 'TimePicker',
                component: () => import('../views/models/timePickerProps'),
            },
            {
                path: 'Cascader',
                name: 'Cascader',
                component: () => import('../views/models/cascaderProps'),
            },
            {
                path: 'Select',
                name: 'Select',
                component: () => import('../views/models/selectProps'),
            },
            {
                path: 'Box',
                name: 'Box',
                component: () => import('../views/models/boxProps'),
            },
            // {
            //     path: 'ColorPicker',
            //     name: 'ColorPicker',
            //     component: () => import('../views/models/colorPickerProps'),
            // },
        ]
    },
]

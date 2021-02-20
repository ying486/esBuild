export const routeMap = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home'),
        children: [
            {
                path: 'Input',
                name: 'Input',
                component: () => import('../views/props/inputProps'),
            },
            {
                path: 'RadioGroup',
                name: 'RadioGroup',
                component: () => import('../views/props/radioGroupProps'),
            },
            {
                path: 'CheckboxGroup',
                name: 'CheckboxGroup',
                component: () => import('../views/props/checkboxGroupProps'),
            },
            {
                path: 'i-switch',
                name: 'i-switch',
                component: () => import('../views/props/switchProps'),
            },
            {
                path: 'InputNumber',
                name: 'InputNumber',
                component: () => import('../views/props/inputNumberProps'),
            },
            {
                path: 'Rate',
                name: 'Rate',
                component: () => import('../views/props/rateProps'),
            },
            {
                path: 'DatePicker',
                name: 'DatePicker',
                component: () => import('../views/props/datePickerProps'),
            },
            {
                path: 'TimePicker',
                name: 'TimePicker',
                component: () => import('../views/props/timePickerProps'),
            },
            {
                path: 'Cascader',
                name: 'Cascader',
                component: () => import('../views/props/cascaderProps'),
            },
            {
                path: 'Select',
                name: 'Select',
                component: () => import('../views/props/selectProps'),
            },
            {
                path: 'Box',
                name: 'Box',
                component: () => import('../views/props/boxProps'),
            },
            // {
            //     path: 'ColorPicker',
            //     name: 'ColorPicker',
            //     component: () => import('../views/props/colorPickerProps'),
            // },
        ]
    },
]

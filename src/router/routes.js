export const routeMap = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home'),
        children: [
            {
                path: 'Input',
                name: 'Input',
                component: () => import('../views/models/defaultProps'),
            },
            {
                path: 'Radio',
                name: 'Radio',
                component: () => import('../views/models/defaultProps'),
            }
        ]
    },
]

/*
    Split Router config to avoid cyclic dependency.
    Here we store everything but components,
    So we´ll can import this config to some component and not get troubles with cyclic dependencies
*/

export const routesKeys = {
    login: 'login',
    chat: 'chat',
    chatWith: 'chatWith'
}

export const routesConfig = [
    {
        key: routesKeys.login,
        path: '/login',
        title: 'Login',
        isPrivate: false
    },
    {
        key: routesKeys.chat,
        path: '/chat',
        title: 'Chat',
        isPrivate: true
    },
]



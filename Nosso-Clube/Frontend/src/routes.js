const HomePage = () => import('./views/HomePage') // importação que retorna uma promise
const Login = () => import('./views/Login') // importação que retorna uma promise


const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login
    },
]

export default routes
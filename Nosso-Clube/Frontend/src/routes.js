const HomePage = () => import('./pages/HomePage') // importação que retorna uma promise
const AboutPage = () => import('./pages/AboutPage') // importação que retorna uma promise
const Login = () => import('./pages/Login') // importação que retorna uma promise


const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/login',
        component: Login
    },
]

export default routes
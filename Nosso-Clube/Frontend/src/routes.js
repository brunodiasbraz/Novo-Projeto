const HomePage = () => import('./pages/HomePage') // importação que retorna uma promise
const AboutPage = () => import('./pages/AboutPage') // importação que retorna uma promise

const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

export default routes
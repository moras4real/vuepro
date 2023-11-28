import {createRouter, createWebHistory} from 'vue-router';
import Landingpage from '../components/LandingPage.vue'
import Signup from '../components/SignUp.vue';
import Signin from '../components/SignIn.vue';
import Dashboard from '../components/DashboardPage.vue';
import Helloworld from '../components/HelloWorld.vue';
// import AboutPage from '../components/AboutPage.vue';
// import NotFound from '../components/NotFound.vue';
// import UsersComponent from '../components/UsersComponent.vue';
// import UserDetails from '../components/UserDetails.vue';

const routes =[
    {
        path: '/',
        component: Landingpage,
        name: "Home"
    },

    {
        path: '/signup',
        component: Signup,
        name: "Signup"
    },

    {
        path: '/signin',
        component: Signin,
        name: "Signin"
    },

    {
        path: '/dashboard',
        component: Dashboard,
        name: "Dashboard"
    },
    
    {
        path: '/helloworld',
        component: Helloworld,
        name: "Hello"
    },
    
    
    // { path: "/users",
    // component: UsersComponent,
    // name: "Users"
    // },


    // { path: "/users/:id",
    // component: UserDetails,
    // name: "Details"
    // },


    // { 
    //     path: '/about', 
    //     component: AboutPage,
    //     name: "About"
    // },


    // { path: '/:pathMatch(.*)*',
    // component: NotFound 
    // },

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;
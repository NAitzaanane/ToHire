import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dashboard.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import Project from "./views/Project.vue";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes: [{
            path: "/",
            name: "components",
            components: {
                header: AppHeader,
                default: Components,
                footer: AppFooter
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            components: {
                header: AppHeader,
                default: Dashboard,
                footer: AppFooter
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        },
        {
            path: "/contact",
            name: "contact",
            components: {
                header: AppHeader,
                default: Contact,
                footer: AppFooter
            }
        },
        {
            path: "/about",
            name: "about",
            components: {
                header: AppHeader,
                default: About,
                footer: AppFooter
            }
        },
        {
            path: "/dashboard/project",
            name: "project",
            components: {
                header: AppHeader,
                default: Project,
                footer: AppFooter
            }
        },
        {
            path: "/dashboard/project/:token",
            name: "project",
            components: {
                header: AppHeader,
                default: Project,
                footer: AppFooter
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
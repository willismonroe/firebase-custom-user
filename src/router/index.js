import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/signin", name: "signin", component: Signin },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/profile", name: "profile", component: Profile },
  ],
});

export default router;

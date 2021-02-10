<template>
    <nav id="navbar" class="bg-primarybl bg-opacity-75 text-heading lg:px-10">
        <div class="nav-wrap max-w-screen-lg mx-auto">
            <div class="flex flex-row mx-auto py-2 border-b border-gray-600 text-sm lg:w-full">
                <ul class="flex flex-row">
                    <li><a class="px-2 lg:px-4 hover:text-primary" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" /></a></li>
                    <li><a class="px-2 lg:px-4 hover:text-primary" href="#"><font-awesome-icon :icon="['fab', 'twitter']" size="lg" /></a></li>
                    <li><a class="px-2 lg:px-4 hover:text-primary" href="#"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a></li>
                    <li><a class="px-2 lg:px-4 hover:text-primary" href="#"><font-awesome-icon :icon="['fab', 'google-plus-g']" size="lg" /></a></li>
                    <li class="px-4 flex items-center hidden sm:block"><font-awesome-icon :icon="['fa', 'phone-alt']" size="sm" /><span class="pl-2 cursor-default">434-145-813</span></li>
                </ul>
                <ul class="ml-auto flex flex-row">
                    <li class="flex justify-between items-center" @click="toggleActive()">
                        <div class="w-16 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out" :class="{ 'bg-blue-200': toggleClicked}">
                            <div class="bg-white w-8 h-4 rounded-full shadow-md transform duration-300 ease-in-out" :class="{ 'translate-x-6': toggleClicked,}"></div>
                        </div>
                    </li>
                    <template v-if="!loggedIn">
                        <li><router-link to="/register" class="px-4 hover:text-primary" href="#">Sign Up</router-link></li>
                        <li><router-link to="/login" class="px-4 hover:text-primary" href="#">Login</router-link></li>
                    </template>
                    <template v-else>
                        <li><router-link to="/login" class="px-4 hover:text-primary" href="#">Profile</router-link></li>
                        <li><a href="#" class="px-4 hover:text-primary" @click.prevent="logout">Logout</a></li>
                    </template>

                </ul>
            </div>
            <div class="grid grid-flow-row place-items-center lg:flex lg:justify-between">
                <ul class="py-5">
                    <li class="text-center cursor-default">
                        <span class="flex uppercase font-bold italic tracking-widest text-2xl text-secondary">Nameless <h1 class="text-primary px-2">Gym</h1></span>
                        <h3 class="text-xl tracking-widest font-semibold">Fitness Center</h3>
                    </li>
                </ul>
                <div class="menu-btn text-white place-self-start pl-4 py-2 lg:hidden">
                    <div class="h-6 w-6 toggle-menu relative cursor-pointer group" :class="{close: closeMenu}"
                        @click="closeMenu = !closeMenu">
                        <span class="line line1 group-hover:bg-primary"></span>
                        <span class="line line2 group-hover:bg-primary"></span>
                        <span class="line line3 group-hover:bg-primary"></span>
                    </div>
                </div>
                <ul v-if="closeMenu || screenWidth >= 1024" class="list-none font-bold italic flex flex-col py-2 place-items-center justify-end mx-auto lg:w-full lg:flex-row lg:-mr-8">
                    <li class="my-2 lg:my-4 lg:ml-auto">
                        <router-link to="/" class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary">
                            Home
                        </router-link>
                    </li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary"
                        href="#classes" @click.prevent="routeName() === 'front' ? scrollTo('classes') : toFrontPage()">Classes</a>
                    </li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary"
                        href="#team" @click.prevent="routeName() === 'front' ? scrollTo('team') : toFrontPage()">Team</a>
                    </li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary"
                        href="#pricing" @click.prevent="routeName() === 'front' ? scrollTo('pricing') : toFrontPage()">Pricing</a>
                    </li>
                    <li class="my-2 mb-5 lg:my-4 lg:mr-2"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary"
                        href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>

export default {
    data() {
        return {
            closeMenu: false,
            toggleClicked: false,
            screenWidth: window.innerWidth
        }
    },
    computed : {
        loggedIn() {
            return this.$store.getters['user/loggedIn']
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeWidth)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.resizeWidth);
    },

    methods: {
        scrollTo(selector) {
            document.getElementById(selector).scrollIntoView({ behavior: 'smooth'})
        },
        resizeWidth() {
            this.screenWidth = window.innerWidth
        },
        toggleActive() {
            this.toggleClicked = !this.toggleClicked
            this.toggleTheme()
        },
        toggleTheme() {
            if(this.toggleClicked === true) {
                document.documentElement.setAttribute('data-theme', 'light')
            } else {
                document.documentElement.removeAttribute('data-theme')
            }
        },
        routeName() {
            return this.$route.name
        },
        toFrontPage() {
            this.$router.push({ 'name': 'front'})
        },
        logout() {
            this.$store.dispatch('user/logoutUser')
        }
    },
}
</script>

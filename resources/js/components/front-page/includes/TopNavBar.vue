<template>
<div class="min-h-1/4">
    <nav id="navbar" class="bg-primarybl bg-opacity-75 text-gray-300 lg:px-10">
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
                    <li><a class="px-4 hover:text-primary" href="#">Sign Up</a></li>
                    <li><a class="px-4 hover:text-primary" href="#">Login</a></li>
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
                    <li class="my-2 lg:my-4 lg:ml-auto"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary" href="#">Home</a></li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary" href="#">Classes</a></li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary" href="#">Team</a></li>
                    <li class="my-2 lg:my-4"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary" href="#">Pricing</a></li>
                    <li class="my-2 mb-5 lg:my-4 lg:mr-2"><a class="px-20 lg:px-10 py-2 border border-transparent text-secondary hover:text-primary focus:border-primary" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>


<script>
export default {
    data() {
        return {
            closeMenu: false,
            screenWidth: window.innerWidth
        }
    },

    mounted() {
        window.addEventListener('resize', this.resizeWidth)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.resizeWidth);
    },

    methods: {
        resizeWidth() {
            this.screenWidth = window.innerWidth
        }
    },
}
</script>

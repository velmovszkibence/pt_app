<template>
        <div class="min-h-screen bg-gray-100 flex flex-col items-stretch">
            <Header></Header>
            <router-view></router-view>
            <template v-if="isHome">
			    <Footer></Footer>
		    </template>
        </div>
</template>


<script>
import { authComputed } from './store/helpers.js'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
         Header,
         Footer
    },

    computed: {
        ...authComputed,
        isHome() {
            return this.$route.name === 'front'
        }
    }
}
</script>

<template>
    <div class="min-h-screen">
        <nav class="flex flex-col lg:flex-row">
            <ul>
                <li><router-link to="#">Profile</router-link></li>
                <li><router-link to="#">Profile</router-link></li>
                <li><router-link to="#">Profile</router-link></li>
                <li><router-link to="#">Profile</router-link></li>
                <li><a href="#" @click.prevent="logout">Logout</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            logout() {
                this.$store.dispatch('user/logoutUser')
                .then(() => {
                    this.$router.push({name: 'front'})
                })
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <nav-bar></nav-bar>
        <showcase></showcase>

    </div>
</template>


<script>
import NavBar from './NavBar';
import ShowCase from './ShowCase';

export default {
    components: {
         NavBar,
         'showcase': ShowCase,
         },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

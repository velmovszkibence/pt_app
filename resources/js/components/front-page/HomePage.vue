<template>
    <div class="container-fluid bg-rgba">
        <div class="min-h-screen">
            <top-navbar></top-navbar>
            <showcase></showcase>
            <what-we-do></what-we-do>
            <bottom-navbar></bottom-navbar>
        </div>
    </div>
</template>


<script>
import TopNavBar from './includes/TopNavBar'
import ShowCase from './includes/ShowCase';
import WhatWeDo from './includes/WhatWeDo';
import BottomNavBar from './includes/BottomNavBar';

export default {
    components: {
         'top-navbar': TopNavBar,
         'showcase': ShowCase,
         'what-we-do': WhatWeDo,
         'bottom-navbar': BottomNavBar,
         },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

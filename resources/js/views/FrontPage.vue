<template>
    <div class="container-fluid">
        <div class="relative">
            <div class="fixed bottom-10 right-2">
                <a class="px-2 bg-gray-300 text-white py-4 rounded-lg lg:px-4 hover:text-primary" href="#app" @click.prevent="scrollTo('navbar')">
                    <font-awesome-icon :icon="['fas', 'arrow-up']" size="lg" />
                </a></div>
            <ShowCase></ShowCase>
            <WhatWeDo></WhatWeDo>
        </div>
    </div>
</template>


<script>
import ShowCase from './includes/ShowCase';
import WhatWeDo from './includes/WhatWeDo';

export default {
    components: {
         'ShowCase': ShowCase,
         'WhatWeDo': WhatWeDo,
    },
    methods: {
        scrollTo(selector) {
            document.getElementById(selector).scrollIntoView({ behavior: 'smooth'})
        },
    }
}
</script>

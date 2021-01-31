<template>
    <nav class="bg-black bg-opacity-90 text-gray-300 sm:px-10">
        <div class="flex flex-row py-2 border-b text-sm sm:w-3/4 mx-auto">
            <ul class="flex flex-row">
                <li class="px-4"><a class="text-md" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" /></a></li>
                <li class="px-4"><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" size="lg" /></a></li>
                <li class="px-4"><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a></li>
                <li class="px-4"><a href="#"><font-awesome-icon :icon="['fab', 'google-plus-g']" size="lg" /></a></li>
                <li class="px-4 flex items-center hidden sm:block"><font-awesome-icon :icon="['fa', 'phone-alt']" size="sm" /><span class="pl-2">434-145-813</span></li>
            </ul>
            <ul class="ml-auto flex flex-row">
                <li class="px-4"><a href="#">Sign Up</a></li>
                <li class="px-4"><a href="#">Login</a></li>
            </ul>
        </div>
        <div class="list-none flex flex-col py-2 place-items-center justify-end mx-auto sm:w-3/4 md:flex-row">
            <li class="mt-2 mb-4"><a class="px-20 py-2 hover:bg-green-600 hover:text-white" href="#">Home</a></li>
            <li class="mb-4"><a class="px-20 py-2 hover:bg-green-600 hover:text-white" href="#">Classes</a></li>
            <li class="mb-4"><a class="px-20 py-2 hover:bg-green-600 hover:text-white" href="#">Team</a></li>
            <li class="mb-4"><a class="px-20 py-2 hover:bg-green-600 hover:text-white" href="#">Pricing</a></li>
            <li class="mb-4"><a class="px-20 py-2 hover:bg-green-600 hover:text-white" href="#">Contact</a></li>
        </div>
    </nav>
</template>


<script>
export default {

}
</script>

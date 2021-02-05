<template>
    <div id="about" class="min-h-full flex flex-col place-items-center mx-auto text-secondary pt-20 bg-primarybl">
        <div class="max-w-screen-xl text-center px-10 mb-32">
            <h2 class="py-10 font-bold uppercase text-2xl">What we offer for our clients</h2>
            <p class="py-8 break-words text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, mollitia!</p>
            <div class="w-4/5 mx-auto grid grid-cols gap-4 sm:w-full sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:h-64">
                <div class="flex flex-col justify-evenly text-center p-2 h-72 rounded-lg bg-primary px-4">
                    <span><font-awesome-icon :icon="['fas', 'clipboard-list']" size="2x" /></span>
                    <h2 class="font-bold uppercase italic text-xl">Nutrition Plan</h2>
                    <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                </div>
                <div class="flex flex-col justify-evenly text-center p-2 h-72 rounded-lg bg-secondary text-primary px-4 sm:order-first lg:order-none">
                    <span><font-awesome-icon :icon="['fas', 'user-ninja']" size="2x" /></span>
                    <h2 class="font-bold uppercase italic text-xl">Personal Training</h2>
                    <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                </div>
                <div class="flex flex-col justify-evenly text-center p-2 h-72 rounded-lg bg-primary px-4">
                    <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x" /></span>
                    <h2 class="font-bold uppercase italic text-xl">Affordable Prices</h2>
                    <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                </div>
                <div class="flex flex-col justify-evenly text-center p-2 h-72 rounded-lg bg-secondary text-primary px-4">
                    <span><font-awesome-icon :icon="['fas', 'dumbbell']" size="2x" /></span>
                    <h2 class="font-bold uppercase italic text-xl">Best Equipment</h2>
                    <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                </div>
            </div>
            <h2 id="team" class="mt-40 font-bold uppercase text-2xl">Our Team</h2>
            <div class="max-w-screen-xl flex flex-col text-center mx-auto py-20 px-10 sm:px-2 lg:px-8">
                <div class="flex flex-col md:flex-row pt-10">
                    <div class="mx-auto sm:max-w-1/2 md:w-1/2 lg:w-1/3">
                        <img class="max-w-64" src="/images/trainer.jpg" />
                    </div>
                    <div class="w-full flex flex-col justify-evenly md:w-1/2 md:pl-10 lg:w-2/3">
                        <h2 class="py-10 md:py-0">Name</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi beatae, tempora, consequatur sit pariatur provident laborum inventore possimus repellat ea, natus placeat reprehenderit.
                            Accusamus sint et non exercitationem, culpa illo?
                        </p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row pt-10">
                    <div class="mx-auto sm:max-w-1/2 md:w-1/2 lg:w-1/3">
                        <img class="max-w-64" src="/images/trainer2.jpg" />
                    </div>
                    <div class="w-full flex flex-col justify-evenly md:w-1/2 md:pl-10 lg:w-2/3">
                        <h2 class="py-10 md:py-0">Name</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi beatae, tempora, consequatur sit pariatur provident laborum inventore possimus repellat ea, natus placeat reprehenderit.
                            Accusamus sint et non exercitationem, culpa illo?
                        </p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row pt-10">
                    <div class="mx-auto sm:max-w-1/2 md:w-1/2 lg:w-1/3">
                        <img class="max-w-64" src="/images/trainer.jpg" />
                    </div>
                    <div class="w-full flex flex-col justify-evenly md:w-1/2 md:pl-10 lg:w-2/3">
                        <h2 class="py-10 md:py-0">Name</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Animi beatae, tempora, consequatur sit pariatur provident laborum inventore possimus repellat ea, natus placeat reprehenderit.
                            Accusamus sint et non exercitationem, culpa illo?
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div id="classes" class="min-h-screen w-full mb-10">
            <div class="max-w-screen-xl lg:w-full text-center mx-auto py-20 px-8">
                <h2 class="py-10 font-bold uppercase text-2xl dropshadow">Our Classes</h2>
                <p class="py-8 break-words text-md dropshadow">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, mollitia!</p>
                <div class="mx-auto grid grid-cols gap-4 sm:w-full sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/weight_training.jpg') center center/cover no-repeat"></div>
                        <div class="flex-1 flex flex-col justify-evenly">
                            <h2 class="font-bold uppercase italic text-xl">Weight Training</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/yoga.jpg') center center/cover no-repeat"></div>
                        <div class="flex-1 flex flex-col justify-evenly sm:order-first">
                            <h2 class="font-bold uppercase italic text-xl">Yoga</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/cardio.jpg') center center/cover no-repeat"></div>
                        <div class="flex-1 flex flex-col justify-evenly">
                            <h2 class="font-bold uppercase italic text-xl">Cardio</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/bodyweight.jpg') center center/cover no-repeat;"></div>
                        <div class="flex-1 flex flex-col justify-evenly sm:order-first">
                            <h2 class="font-bold uppercase italic text-xl">Bodyweight Workout</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/box.jpg') center center/cover no-repeat"></div>
                        <div class="flex-1 flex flex-col justify-evenly">
                            <h2 class="font-bold uppercase italic text-xl">Boxing</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly text-center p-2 h-96 rounded-lg bg-primarybl text-secondary px-4">
                        <div class="flex-1" style="background: url('/images/swimming.jpg') center center/cover no-repeat"></div>
                        <div class="flex-1 flex flex-col justify-evenly sm:order-first">
                            <h2 class="font-bold uppercase italic text-xl">Swimming</h2>
                            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat minima necessitatibus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="pricing">
            <div class="max-w-screen-xl text-center mx-auto py-20 px-8 font-bold lg:w-full">
                <h2 class="py-10 px-10 uppercase text-2xl dropshadow text-left text-secondary mb-8 md:px-20">Our Pricing Plans</h2>
                <div class="mx-auto grid grid-cols gap-4 text-black lg:grid-cols-3 lg:gap-8">
                    <div class="h-96 w-full bg-secondary rounded-lg mx-auto mb-6">
                        <h2 class="bg-primary py-4 rounded-t-lg text-secondary">Plan A</h2>
                        <span class="flex justify-center pt-4">
                            <i class="pr-1">$</i>
                            <h2 class="font-extrabold italic text-4xl">9.99</h2>
                        </span>
                        <h2 class="text-lg">/month</h2>
                        <ul class="py-6 flex flex-col place-items-center">
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                        </ul>
                        <a href="#" class="py-2 bg-primary text-secondary flex justify-center w-4/5 mx-auto rounded-lg hover:bg-primarylight">Get Started</a>
                    </div>
                    <div class="h-96 w-full bg-secondary rounded-lg mx-auto mb-6">
                        <h2 class="bg-primary py-4 rounded-t-lg text-secondary">Plan B</h2>
                        <span class="flex justify-center pt-4">
                            <i class="pr-1">$</i>
                            <h2 class="font-extrabold italic text-4xl">14.99</h2>
                        </span>
                        <h2 class="text-lg">/month</h2>
                        <ul class="py-6 flex flex-col place-items-center">
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                        </ul>
                        <a href="#" class="py-2 bg-primary text-secondary flex justify-center w-4/5 mx-auto rounded-lg hover:bg-primarylight">Get Started</a>
                    </div>
                    <div class="h-96 w-full bg-secondary rounded-lg mx-auto md:w-72">
                        <h2 class="bg-primary py-4 rounded-t-lg text-secondary">Plan B</h2>
                        <span class="flex justify-center pt-4">
                            <i class="pr-1">$</i>
                            <h2 class="font-extrabold italic text-4xl">32.99</h2>
                        </span>
                        <h2 class="text-lg">/month</h2>
                        <ul class="py-6 flex flex-col place-items-center">
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                            <li class="flex w-2/3 justify-evenly"><font-awesome-icon :icon="['fas', 'check']" size="lg" />Dummy Text</li>
                        </ul>
                        <a href="#" class="py-2 bg-primary text-secondary flex justify-center w-4/5 mx-auto rounded-lg hover:bg-primarylight">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
